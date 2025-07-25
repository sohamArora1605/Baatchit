package com.baatchit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.baatchit.constants.MessageConstants;
import com.baatchit.entities.Message;
import com.baatchit.entities.MessageState;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query(name = MessageConstants.FIND_MESSAGES_BY_CHAT_ID)
    List<Message> findMessagesByChatId(@Param("chatId") String chatId);

    @Query(name = MessageConstants.SET_MESSAGES_TO_SEEN_BY_CHAT)
    @Modifying
    void setMessagesToSeenByChatId(@Param("chatId") String chatId, @Param("newState") MessageState state);
}