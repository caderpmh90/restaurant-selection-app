import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket!: WebSocket;


  connect(handleMessage?:(msg:string)=>any) {
    const socketUrl = 'http://localhost:8080/websocket';
    this.socket = new SockJS(socketUrl);

    this.socket.onopen = (event) => {
      console.log('WebSocket connection opened.');
    };

    this.socket.onmessage = (event) => {
      const message = event.data;
      handleMessage?handleMessage(message):this.handleMessage(message);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed.');
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  private handleMessage(message: string) {
    // Handle incoming messages here
    console.log('Received message:', message);
  }

  sendMessage(message: string) {
    if (this.socket.readyState === SockJS.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not open. Cannot send message.');
    }
  }

  closeConnection() {
    this.socket.close();
  }
}
