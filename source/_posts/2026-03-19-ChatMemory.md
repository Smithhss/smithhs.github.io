---
title: ChatMemory
date: 2026-03-19 19:17:57
tags:
  - 项目
  - 实战
categories: 技术分享
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---


# ChatConfiguration&#x20;

```java

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.ChatMemoryRepository;
import org.springframework.ai.chat.memory.InMemoryChatMemoryRepository;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.deepseek.DeepSeekChatModel;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


@Configuration
public class ChatConfiguration {


    @Bean
    public ChatClient ollamaChatChatClient(OllamaChatModel ollamaChatModel, ChatMemory chatMemory) {
        return ChatClient.builder(ollamaChatModel).defaultAdvisors(MessageChatMemoryAdvisor.builder(chatMemory).build()).build();
        //通过chatclient构造器设置系统提示词
        //return ChatClient.builder(ollamaChatModel).defaultSystem("以古风风格回答问题").build();
    }

    @Bean
    public ChatClient deepSeekChatChatClient(DeepSeekChatModel deepSeekChatModel) {
        return ChatClient.builder(deepSeekChatModel).build();
    }

    /**
     * 基于内存记忆
     *
     * @return
     */
    @Bean
    @Primary
    public ChatMemoryRepository chatMemoryRepository() {
        return new InMemoryChatMemoryRepository();
    }

    @Bean
    public ChatMemory chatMemory(ChatMemoryRepository chatMemoryRepository) {
        return MessageWindowChatMemory.builder()
                .chatMemoryRepository(chatMemoryRepository)
                .maxMessages(20) // 设置每个对话保存的最大消息数量
                .build();
    }
}
```



# ChatMemoryController&#x20;

```java

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.messages.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/chatmemory")
public class ChatMemoryController {

    @Resource
    private ChatClient ollamaChatChatClient;

    @Resource
    private ChatMemory chatMemory;

    @GetMapping(value = "/chat1", produces = "text/stream;charset=UTF-8")
    public Flux<String> chat1(String message) {
        List<Message> messageList = chatMemory.get("123");
        messageList.forEach(s -> log.info("历史记录:{}", s.getText()));

        Flux<String> flux = ollamaChatChatClient.prompt()
                .user(message)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, "123"))
                .stream().content();
        return flux;
    }
}
```

注意：目前的版本中官方并未给出redis的实现，但是我们可以参考内存缓存给一个自己的实现以下是内存缓存的实现

```
[INFO] --- dependency:3.8.1:tree (default-cli) @ localmodel ---
[INFO] com.easyai:localmodel:jar:1.0.0
[INFO] +- org.springframework.boot:spring-boot-starter-web:jar:3.5.4:compile
[INFO] |  +- org.springframework.boot:spring-boot-starter:jar:3.5.4:compile
[INFO] |  |  +- org.springframework.boot:spring-boot:jar:3.5.4:compile
[INFO] |  |  +- org.springframework.boot:spring-boot-autoconfigure:jar:3.5.4:compile
[INFO] |  |  +- org.springframework.boot:spring-boot-starter-logging:jar:3.5.4:compile
[INFO] |  |  |  +- ch.qos.logback:logback-classic:jar:1.5.18:compile
[INFO] |  |  |  |  \- ch.qos.logback:logback-core:jar:1.5.18:compile
[INFO] |  |  |  +- org.apache.logging.log4j:log4j-to-slf4j:jar:2.24.3:compile
[INFO] |  |  |  |  \- org.apache.logging.log4j:log4j-api:jar:2.24.3:compile
[INFO] |  |  |  \- org.slf4j:jul-to-slf4j:jar:2.0.17:compile
[INFO] |  |  +- jakarta.annotation:jakarta.annotation-api:jar:2.1.1:compile
[INFO] |  |  +- org.springframework:spring-core:jar:6.2.9:compile
[INFO] |  |  |  \- org.springframework:spring-jcl:jar:6.2.9:compile
[INFO] |  |  \- org.yaml:snakeyaml:jar:2.4:compile
[INFO] |  +- org.springframework.boot:spring-boot-starter-json:jar:3.5.4:compile
[INFO] |  |  +- com.fasterxml.jackson.core:jackson-databind:jar:2.19.2:compile
[INFO] |  |  |  +- com.fasterxml.jackson.core:jackson-annotations:jar:2.19.2:compile
[INFO] |  |  |  \- com.fasterxml.jackson.core:jackson-core:jar:2.19.2:compile
[INFO] |  |  +- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:jar:2.19.2:compile
[INFO] |  |  +- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:jar:2.19.2:compile
[INFO] |  |  \- com.fasterxml.jackson.module:jackson-module-parameter-names:jar:2.19.2:compile
[INFO] |  +- org.springframework.boot:spring-boot-starter-tomcat:jar:3.5.4:compile
[INFO] |  |  +- org.apache.tomcat.embed:tomcat-embed-core:jar:10.1.43:compile
[INFO] |  |  +- org.apache.tomcat.embed:tomcat-embed-el:jar:10.1.43:compile
[INFO] |  |  \- org.apache.tomcat.embed:tomcat-embed-websocket:jar:10.1.43:compile
[INFO] |  +- org.springframework:spring-web:jar:6.2.9:compile
[INFO] |  |  +- org.springframework:spring-beans:jar:6.2.9:compile
[INFO] |  |  \- io.micrometer:micrometer-observation:jar:1.15.2:compile
[INFO] |  |     \- io.micrometer:micrometer-commons:jar:1.15.2:compile
[INFO] |  \- org.springframework:spring-webmvc:jar:6.2.9:compile
[INFO] |     +- org.springframework:spring-aop:jar:6.2.9:compile
[INFO] |     +- org.springframework:spring-context:jar:6.2.9:compile
[INFO] |     \- org.springframework:spring-expression:jar:6.2.9:compile
[INFO] +- org.springframework.ai:spring-ai-starter-model-ollama:jar:1.1.0:compile
[INFO] |  +- org.springframework.ai:spring-ai-autoconfigure-model-ollama:jar:1.1.0:compile
[INFO] |  |  +- org.springframework.ai:spring-ai-autoconfigure-retry:jar:1.1.0:compile
[INFO] |  |  +- org.springframework.ai:spring-ai-autoconfigure-model-tool:jar:1.1.0:compile
[INFO] |  |  +- org.springframework.ai:spring-ai-autoconfigure-model-chat-observation:jar:1.1.0:compile
[INFO] |  |  \- org.springframework.ai:spring-ai-autoconfigure-model-embedding-observation:jar:1.1.0:compile
[INFO] |  +- org.springframework.ai:spring-ai-ollama:jar:1.1.0:compile
[INFO] |  |  +- org.springframework.ai:spring-ai-model:jar:1.1.0:compile
[INFO] |  |  |  +- org.springframework.ai:spring-ai-commons:jar:1.1.0:compile
[INFO] |  |  |  |  +- io.micrometer:micrometer-core:jar:1.15.2:compile
[INFO] |  |  |  |  |  +- org.hdrhistogram:HdrHistogram:jar:2.2.2:runtime
[INFO] |  |  |  |  |  \- org.latencyutils:LatencyUtils:jar:2.0.3:runtime
[INFO] |  |  |  |  \- io.micrometer:context-propagation:jar:1.1.3:compile
[INFO] |  |  |  +- org.springframework.ai:spring-ai-template-st:jar:1.1.0:compile
[INFO] |  |  |  |  \- org.antlr:ST4:jar:4.3.4:compile
[INFO] |  |  |  |     \- org.antlr:antlr-runtime:jar:3.5.3:compile
[INFO] |  |  |  +- org.springframework:spring-messaging:jar:6.2.9:compile
[INFO] |  |  |  +- io.projectreactor:reactor-core:jar:3.7.8:compile
[INFO] |  |  |  |  \- org.reactivestreams:reactive-streams:jar:1.0.4:compile
[INFO] |  |  |  +- org.antlr:antlr4-runtime:jar:4.13.1:compile
[INFO] |  |  |  +- com.github.victools:jsonschema-generator:jar:4.38.0:compile
[INFO] |  |  |  |  \- com.fasterxml:classmate:jar:1.7.0:compile
[INFO] |  |  |  +- com.github.victools:jsonschema-module-jackson:jar:4.38.0:compile
[INFO] |  |  |  +- com.github.victools:jsonschema-module-swagger-2:jar:4.38.0:compile
[INFO] |  |  |  \- io.swagger.core.v3:swagger-annotations-jakarta:jar:2.2.30:compile
[INFO] |  |  +- org.springframework.ai:spring-ai-retry:jar:1.1.0:compile
[INFO] |  |  |  \- org.springframework.retry:spring-retry:jar:2.0.12:compile
[INFO] |  |  +- org.springframework:spring-webflux:jar:6.2.9:compile
[INFO] |  |  \- org.slf4j:slf4j-api:jar:2.0.17:compile
[INFO] |  +- org.springframework.ai:spring-ai-autoconfigure-model-chat-client:jar:1.1.0:compile
[INFO] |  |  \- org.springframework.ai:spring-ai-client-chat:jar:1.1.0:compile
[INFO] |  |     +- io.modelcontextprotocol.sdk:mcp-json-jackson2:jar:0.16.0:compile
[INFO] |  |     |  +- io.modelcontextprotocol.sdk:mcp-json:jar:0.16.0:compile
[INFO] |  |     |  \- com.networknt:json-schema-validator:jar:2.0.0:compile
[INFO] |  |     |     +- com.ethlo.time:itu:jar:1.14.0:compile
[INFO] |  |     |     \- com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:jar:2.19.2:compile
[INFO] |  |     +- com.fasterxml.jackson.module:jackson-module-jsonSchema:jar:2.19.2:compile
[INFO] |  |     |  \- javax.validation:validation-api:jar:1.1.0.Final:compile
[INFO] |  |     \- com.knuddels:jtokkit:jar:1.1.0:compile
[INFO] |  \- org.springframework.ai:spring-ai-autoconfigure-model-chat-memory:jar:1.1.0:compile
[INFO] +- org.springframework.ai:spring-ai-starter-model-deepseek:jar:1.1.0:compile
[INFO] |  +- org.springframework.ai:spring-ai-autoconfigure-model-deepseek:jar:1.1.0:compile
[INFO] |  \- org.springframework.ai:spring-ai-deepseek:jar:1.1.0:compile
[INFO] |     \- org.springframework:spring-context-support:jar:6.2.9:compile
[INFO] +- org.springframework.ai:spring-ai-starter-model-chat-memory-repository-jdbc:jar:1.1.0:compile
[INFO] |  +- org.springframework.ai:spring-ai-autoconfigure-model-chat-memory-repository-jdbc:jar:1.1.0:compile
[INFO] |  \- org.springframework.ai:spring-ai-model-chat-memory-repository-jdbc:jar:1.1.0:compile
[INFO] |     +- org.springframework:spring-jdbc:jar:6.2.9:compile
[INFO] |     |  \- org.springframework:spring-tx:jar:6.2.9:compile
[INFO] |     \- com.zaxxer:HikariCP:jar:6.3.1:compile
[INFO] +- com.mysql:mysql-connector-j:jar:9.3.0:runtime
[INFO] \- org.projectlombok:lombok:jar:1.18.36:compile

```












