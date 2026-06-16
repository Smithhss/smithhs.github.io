---
title: ChatClient
date: 2026-03-19 19:15:40
tags:
  - 项目
  - 实战
categories: 技术分享
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---


# ChatConfiguration

```java

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.deepseek.DeepSeekChatModel;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ChatConfiguration{


    @Bean
    public ChatClient ollamaChatChatClient(OllamaChatModel ollamaChatModel) {
        return ChatClient.builder(ollamaChatModel).build();
        //通过chatclient构造器设置系统提示词
        //return ChatClient.builder(ollamaChatModel).defaultSystem("以古风风格回答问题").build();
    }

    @Bean
    public ChatClient deepSeekChatChatClient(DeepSeekChatModel deepSeekChatModel) {
        return ChatClient.builder(deepSeekChatModel).build();
    }
}
```



# ChatClientController

```java

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@Slf4j
@RequestMapping("/chatClient")
public class ChatClientController {

    @Resource
    private ChatClient deepSeekChatChatClient;

    @Resource
    private ChatClient ollamaChatChatClient;
/*

    @Resource
    private ChatClient.Builder builder;

    @RequestMapping(value = "/chat/client", produces = "text/stream;charset=utf8")
    public Flux<String> chatClient() {
        Flux<String> flux = builder.build().prompt()
                .user("你是谁")
                .stream().content();
        return flux;
    }*/

    @RequestMapping(value = "/chat/ollama", produces = "text/stream;charset=utf8")
    public Flux<String> chatOllama() {
        Flux<String> flux = ollamaChatChatClient.prompt()
                .user("你是谁")
                .stream().content();
        return flux;
    }

    @RequestMapping(value = "/chat/deepseek", produces = "text/stream;charset=utf8")
    public Flux<String> chatDeepseek() {
        Flux<String> flux = deepSeekChatChatClient.prompt()
                .user("你是谁")
                .stream().content();
        return flux;
    }
}
```









