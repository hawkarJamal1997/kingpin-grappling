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

  schedule: Schedule[] = [];
  images: String[] = [];
  exercises: GrapplingType[] = [];
  active = 1

  ngOnInit(): void {
    this.getSchedule()
    this.getExercises()
  }

  getSchedule(): void {
    this.schedule = this.scheduleService.getSchedule()
  }

  getExercises(): void {
    this.exercises = this.grapplingType.getGrapplingType()
  }

}
