// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  chatId!: string;
  inputContent: string = '';
  isEnded= false;
  isValid = false;

  constructor(private route: ActivatedRoute,private httpService: HttpService,private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.chatId = params['id'];
      this.httpService.isValidSession(this.chatId).subscribe(response=>{
      this.isValid = true
      this.webSocketService.connect()
      })
    });
  }

  endSession(){
    this.httpService.endSession(this.chatId).subscribe(response=>{
      this.isEnded= true
      console.log('Session ended:', response);
    })
  }

  sendSuggestion(){

  }
}
