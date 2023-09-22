import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  initiateSession(name: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/initiateSession`, {name});
  }

  endSession(sessionId:string): Observable<any>{
    return this.httpClient.delete<any>(`${this.apiUrl}/removeSession/${sessionId}`);
  }

  isValidSession(sessionId:string){
    return this.httpClient.post<any>(`${this.apiUrl}/validateSession`, {sessionId});
  }
}
