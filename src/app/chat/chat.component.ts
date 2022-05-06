import { NgForm } from '@angular/forms';
import { WebSocketService } from '../services/web-socket.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatMessageDto } from '../classes/chatMessageDto';

@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.openWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }
 
}
