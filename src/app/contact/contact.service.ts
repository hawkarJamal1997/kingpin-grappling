import { Message } from './message';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }

  private contactUrl = 'http://localhost:3000/message';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  submitMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.contactUrl, message, this.httpOptions)
  }

}
