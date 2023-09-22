import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { baseUrl} from 'src/app/constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  inputContent: string = '';
  url:string='';

  constructor(private router: Router,private httpService: HttpService) {}
  startSession() {
      if (this.inputContent.trim() !== '') {

        this.httpService.initiateSession(this.inputContent).subscribe((response) => {
        this.inputContent=''
          this.url = `${baseUrl}chat/${response.sessionId}`
          console.log('Session initiated:', response);
        });
      }
  }
  onLinkClick(){
  this.router.navigate([this.url])
  }
}
