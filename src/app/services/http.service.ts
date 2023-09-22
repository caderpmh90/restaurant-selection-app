import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL

  constructor(private httpClient: HttpClient) {}

  initiateSession(name: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { name: name };

    // Make the POST request
    return this.httpClient.post<any>(`${this.apiUrl}/initiateSession`, body, { headers });
  }
}
