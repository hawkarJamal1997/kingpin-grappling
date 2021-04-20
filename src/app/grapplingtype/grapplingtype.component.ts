import { GrapplingTypeService } from './grapplingtype.service';

import { Component, OnInit } from '@angular/core';
import { GrapplingType } from './grapplingtype';

@Component({
  templateUrl: './grapplingtype.component.html',
  styleUrls: ['./grapplingtype.component.css']
})
export class GrapplingTypeComponent implements OnInit {

  constructor(private grapplingTypeService: GrapplingTypeService) { }

  grapplingTypes: GrapplingType[] = [];

  ngOnInit(): void {
    this.getGrapplingType()
  }

  getGrapplingType(): void {
    this.grapplingTypes = this.grapplingTypeService.getGrapplingType()
  }

}
