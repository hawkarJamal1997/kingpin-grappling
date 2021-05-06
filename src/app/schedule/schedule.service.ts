// import { SCHEDULE } from './mock-schedule';
import { Schedule } from './schedule';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor( private http: HttpClient ) { }

  private scheduleUrl = 'http://localhost:3000/schedule'

  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.scheduleUrl)
  }

}
