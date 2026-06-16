---
title: shiro-springboot3.x
date: 2026-05-20 09:17:21
tags:
  - 微服务
  - SpringCloud
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---



# shiro

1. 导入依赖

   ```xml
    <dependency>
               <groupId>org.apache.shiro</groupId>
               <artifactId>shiro-web</artifactId>
               <version>1.13.0</version>
               <classifier>jakarta</classifier>
           </dependency>
           <dependency>
               <groupId>org.apache.shiro</groupId>
               <artifactId>shiro-spring</artifactId>
               <version>1.13.0</version>
               <classifier>jakarta</classifier>
           </dependency>
   ```

2. ShiroConfig配置类, realm， controller(略)

3. jwt依赖

   ```xml
    <dependency>
               <groupId>io.jsonwebtoken</groupId>
               <artifactId>jjwt-api</artifactId>
               <version>0.12.6</version>
           </dependency>
           <dependency>
               <groupId>io.jsonwebtoken</groupId>
               <artifactId>jjwt-impl</artifactId>
               <version>0.12.6</version>
               <scope>runtime</scope>
           </dependency>
           <dependency>
               <groupId>io.jsonwebtoken</groupId>
               <artifactId>jjwt-jackson</artifactId>
               <version>0.12.6</version>
               <scope>runtime</scope>
         
   </dependency>
   ```

4. jwt工具类

   ```java
   package com.cjc.util;
   
   import io.jsonwebtoken.Claims;
   import io.jsonwebtoken.Jwts;
   import io.jsonwebtoken.security.Keys;
   
   import javax.crypto.SecretKey;
   import java.nio.charset.StandardCharsets;
   import java.util.Date;
   
   public class JwtUtil {
       private static String key = "cjc-shop-secret-key-for-jwt-token-generation-2026";
       private static long ttl = 30*24*60*60*1000;
   
       private static SecretKey getSecretKey() {
           return Keys.hmacShaKeyFor(key.getBytes(StandardCharsets.UTF_8));
       }
   
       /**
        * 生成jwt
        *
        * @param id
        * @param subject
        * @param roles
        * @return
        */
       public static String createJwt(String id, String subject, String roles) {
           long millis = System.currentTimeMillis();
           Date date = new Date(millis);
   
           var jwtBuilder = Jwts.builder()
                   .id(id)
                   .subject(subject)
                   .issuedAt(date)
                   .claim("roles", roles)
                   .signWith(getSecretKey());
   
           if (ttl > 0) {
               jwtBuilder.expiration(new Date(millis + ttl));
           }
           return jwtBuilder.compact();
       }
   
       /**
        * 解密jwt
        * @param jwtStr
        * @return
        */
       public Claims parseJwt(String jwtStr) {
           return Jwts.parser()
                   .verifyWith(getSecretKey())
                   .build()
                   .parseSignedClaims(jwtStr)
                   .getPayload();
       }
   
       public String getKey() {
           return key;
       }
   
       public void setKey(String key) {
           this.key = key;
       }
   
       public long getTtl() {
           return ttl;
       }
   
       public void setTtl(long ttl) {
           this.ttl = ttl;
       }
   }
   
   ```

5. gateway中filter

   ```java
   package com.cjc.filter;
   
   import com.alibaba.fastjson.JSONObject;
   import com.alibaba.fastjson.serializer.SerializerFeature;
   import com.cjc.util.JwtUtil;
   import com.cjc.util.Result;
   import org.springframework.cloud.gateway.filter.GatewayFilterChain;
   import org.springframework.cloud.gateway.filter.GlobalFilter;
   import org.springframework.core.annotation.Order;
   import org.springframework.core.io.buffer.DataBuffer;
   import org.springframework.http.HttpStatus;
   import org.springframework.http.server.reactive.ServerHttpRequest;
   import org.springframework.http.server.reactive.ServerHttpResponse;
   import org.springframework.stereotype.Component;
   import org.springframework.util.AntPathMatcher;
   import org.springframework.util.StringUtils;
   import org.springframework.web.server.ServerWebExchange;
   import reactor.core.publisher.Mono;
   
   @Component // 交个spring容器了
   @Order(-1)  // 执行顺序，数字越小，优先级越高
   public class LoginFilter implements GlobalFilter {
   
       @Override
       public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
   
           AntPathMatcher antPathMatcher = new AntPathMatcher();
   
           String[] arr = {"/login/**","/file/**","/pay/**"};
   
           // 1. 获取请求路径，判断是否是登陆请求。
           ServerHttpRequest request = exchange.getRequest();
           String uri = request.getURI().getPath(); // /login/adminLogin
   
           // 循环  判断是否是登陆操作
           for (String s : arr) {
               if(antPathMatcher.match(s, uri)){
                   return chain.filter(exchange);
               }
           }
   
           // 不是登陆登陆请求， 获取请求头的token，解析。
           String jwtToken = request.getHeaders().getFirst("token");
           if(StringUtils.isEmpty(jwtToken)){
               // token无效
               return getVoidMono(exchange);
           }
   
           try {
               // 解析成功，token没有过期，之前 登陆过。直接放行。
               JwtUtil.parseJwt(jwtToken);
           } catch (Exception e) {
               // 解析不成功。token无效，反馈token无效信息
               return getVoidMono(exchange);
           }
           // 放行
           return chain.filter(exchange);
   
       }
   
       private Mono<Void> getVoidMono(ServerWebExchange exchange) {
           ServerHttpResponse response = exchange.getResponse();
           //设置响应码,我要自己处理
           response.setStatusCode(HttpStatus.OK);
           //设置响应头编码
           response.getHeaders().add("Content-Type", "application/json;charset=UTF-8");
           //设置响应内容
           Result result = new Result("10000", "认证过期");
           //不输出为null的字段
           byte[] bytes = JSONObject.toJSONBytes(result, SerializerFeature.WriteMapNullValue);
           DataBuffer wrap = response.bufferFactory().wrap(bytes);
           return response.writeWith(Mono.just(wrap));
       }
   }
   
   ```

   