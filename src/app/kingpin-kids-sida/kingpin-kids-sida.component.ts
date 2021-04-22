import { Component, OnInit } from '@angular/core';
import {KingpinKidsService} from './kingpin-kids.service'
import {KingpinKids} from './kingpinKids'

@Component({
  selector: 'app-kingpin-kids-sida',
  templateUrl: './kingpin-kids-sida.component.html',
  styleUrls: ['./kingpin-kids-sida.component.css']
})
export class KingpinKidsSidaComponent implements OnInit {
  kingpinKidsList : KingpinKids[] = [];

  constructor(private kingpinKidsService:KingpinKidsService) { }

  getKingpinKidsList():void{

    this.kingpinKidsList = this.kingpinKidsService.getContent()

  }
  

  ngOnInit(): void {
    this.getKingpinKidsList()
  }

}
