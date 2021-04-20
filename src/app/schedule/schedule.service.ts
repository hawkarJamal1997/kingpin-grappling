import { SCHEDULE } from './mock-schedule';
import { Schedule } from './schedule';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  getSchedule(): Schedule[] {
    return SCHEDULE
  }

}
