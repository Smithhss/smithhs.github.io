---
title: Tool Calling or Funciton Calling
date: 2026-03-19 19:24:48
tags:
  - 项目
  - 实战
categories: 技术分享
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---




![](https://coderlaoluo.feishu.cn/space/api/box/stream/download/asynccode/?code=ODg1OGFkNmYwZTMxNGZkM2EyYWFlZDAzMzFlODZjMGVfeFVDWGx3Sm1KUVVuZ1RhSzAyemVDSk04cm1meEZtSllfVG9rZW46Rm9tQWJnUEtsb0t3SUN4WVhuQmNyTjhDbkFlXzE3Njc2MTE5MDg6MTc2NzYxNTUwOF9WNA)



# ToolController&#x20;

```java

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.ai.tool.function.FunctionToolCallback;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.function.Function;

@Slf4j
@RestController
@RequestMapping("/tool")
public class ToolController {

    @Resource
    private ChatClient ollamaChatChatClient;


    @RequestMapping(value = "/chat1", produces = "text/stream;charset=utf8")
    public Flux<String> chat1() {
        Flux<String> flux = ollamaChatChatClient.prompt().user("设置一个10分钟后的闹钟").tools(new DateTimeTool()).stream().content();
        return flux;
    }


    class DateTimeTool {

        @Tool(description = "获取系统当前时间")
        public String test() {
            log.info("获取系统时间");
            return LocalDateTime.now().toString();
        }

        @Tool
        public String test2() {
            return "123";
        }

        @Tool
        public void set(@ToolParam(description = "Time in ISO-8601 format") String time) {
            LocalDateTime alarmTime = LocalDateTime.parse(time, DateTimeFormatter.ISO_DATE_TIME);
            log.info("设置闹钟时间:{}", alarmTime);
        }
    }

    /**
     * 函数式定义工具
     */

    @RequestMapping(value = "/chat2", produces = "text/stream;charset=utf8")
    public Flux<String> chat2() {

        FunctionToolCallback<WeatherService.WeatherRequest, WeatherService.WeatherResponse> weatherCallback = FunctionToolCallback.builder("getCurrentWeather",
                new WeatherService()).description("获取当前的地区天气").inputType(WeatherService.WeatherRequest.class).build();


        Flux<String> flux = ollamaChatChatClient.prompt().user("武汉今天的天气如何?").toolCallbacks(weatherCallback).stream().content();
        return flux;
    }

    class WeatherService implements Function<WeatherService.WeatherRequest, WeatherService.WeatherResponse> {

        // 1. 定义请求和响应的记录（Record）
        public record WeatherRequest(String location) {
        }

        public record WeatherResponse(String location, double temperature, String unit) {
        }

        // 2. 实现apply方法，包含真正的工具逻辑
        @Override
        public WeatherResponse apply(WeatherRequest request) {
            // 模拟根据地点返回天气信息
            log.info("参数location:{}", request.location);
            return new WeatherResponse(request.location, 22.0, "°C");
        }
    }
}
```





