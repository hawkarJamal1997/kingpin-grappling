import { GrapplingType } from '../grapplingtype/grapplingtype';
import { GrapplingTypeService } from './../grapplingtype/grapplingtype.service';
import { Schedule } from './schedule'
import { Component, OnInit} from '@angular/core';
import { ScheduleService } from './schedule.service'

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private grapplingType: GrapplingTypeService) { }

  schedule$: Schedule[] = [];
  options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  images: String[] = [];
  exercises: GrapplingType[] = [];
  active = 1

  ngOnInit(): void {
    this.getSchedule()
    this.getExercises()
  }

  getSchedule(): void {
    this.scheduleService.getSchedule()
      .subscribe(schedule => {
        console.log(schedule)
        this.schedule$ = schedule
      })
  }

  getExercises(): void {
    this.exercises = this.grapplingType.getGrapplingType()
  }

}
