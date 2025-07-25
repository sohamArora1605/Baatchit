package com.baatchit.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

import com.baatchit.entities.MessageState;
import com.baatchit.entities.MessageType;
import com.fasterxml.jackson.annotation.JsonInclude;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MessageResponse {

    private Long id;
    private String content;
    private MessageType type;
    private MessageState state;
    private String senderId;
    private String receiverId;
    private LocalDateTime createdAt;
    private byte[] media;
    
}