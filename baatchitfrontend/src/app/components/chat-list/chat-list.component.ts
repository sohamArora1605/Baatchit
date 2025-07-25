import {Component, input, InputSignal, output} from '@angular/core';
import {ChatService} from '../../services/services/chat.service';
import {ChatResponse} from '../../services/models/chat-response';
import {DatePipe} from '@angular/common';
import {UserService} from '../../services/services/user.service';
import {UserResponse} from '../../services/models/user-response';
import {KeycloakService} from '../../utils/keycloak/keycloak.service';
import {MessageService} from '../../services/services/message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  imports: [
    DatePipe,
    FormsModule
  ],
  styleUrls: ['./chat-list.component.scss']

})
export class ChatListComponent {
  chats: InputSignal<ChatResponse[]> = input<ChatResponse[]>([]);
  searchNewContact = false;
  contacts: Array<UserResponse> = [];
  chatSelected = output<ChatResponse>();
  searchText: string = '';
  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private keycloakService: KeycloakService
  ) {
  }
  
private allUsers: UserResponse[] = []; // 🔒 store full user list

performUserSearch() {
  if (this.allUsers.length === 0) {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.allUsers = users;
        this.filterUsers();
      }
    });
  } else {
    this.filterUsers();
  }
}

private filterUsers() {
  const keyword = this.searchText.trim().toLowerCase();

  if (!keyword) {
    this.contacts = this.allUsers;
  } else {
    this.contacts = this.allUsers.filter(user =>
      (user.firstName?.toLowerCase().includes(keyword)) ||
      (user.lastName?.toLowerCase().includes(keyword)) ||
      (user.email?.toLowerCase().includes(keyword))
    );
  }

  this.searchNewContact = true;
}

  searchContact() {
    this.userService.getAllUsers()
      .subscribe({
        next: (users) => {
          this.contacts = users;
          this.searchNewContact = true;
        }
      });
  }

  selectContact(contact: UserResponse) {
  const existingChat = this.chats().find(chat =>
    (chat.senderId === this.keycloakService.userId && chat.receiverId === contact.id) ||
    (chat.receiverId === this.keycloakService.userId && chat.senderId === contact.id)
  );

  if (existingChat) {
    this.chatSelected.emit(existingChat);
    this.searchNewContact = false;
    return;
  }

  // If no chat exists, create a new one
  this.chatService.createChat({
    'sender-id': this.keycloakService.userId as string,
    'receiver-id': contact.id as string
  }).subscribe({
    next: (res) => {
      const chat: ChatResponse = {
        id: res.response,
        name: contact.firstName + ' ' + contact.lastName,
        recipientOnline: contact.online,
        lastMessageTime: contact.lastSeen,
        senderId: this.keycloakService.userId,
        receiverId: contact.id
      };
      this.chats().unshift(chat);
      this.searchNewContact = false;
      this.chatSelected.emit(chat);
    }
  });
}


  chatClicked(chat: ChatResponse) {
    this.chatSelected.emit(chat);
  }

  wrapMessage(lastMessage: string | undefined): string {
    if (lastMessage && lastMessage.length <= 20) {
      return lastMessage;
    }
    return lastMessage?.substring(0, 17) + '...';
  }
}
