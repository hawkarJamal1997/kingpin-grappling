import { Component, OnInit } from '@angular/core';
import {InriktningarService} from '../inriktningar.service';
import {Inriktning} from '../inriktning'

@Component({
  selector: 'app-inriktningar',
  templateUrl: './inriktningar.component.html',
  styleUrls: ['./inriktningar.component.css']
})
export class InriktningarComponent implements OnInit {
  inriktningar: Inriktning[] = [];
  
  constructor(private inriktningarService:InriktningarService) { }

  getInriktningar():void {
    this.inriktningar = this.inriktningarService.getInriktningar()
  }

  ngOnInit(): void {
    this.getInriktningar()
  }

}
