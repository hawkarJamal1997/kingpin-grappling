import { Component, OnInit } from '@angular/core';
import { VarderingarService } from './varderingar.service';
import { Vardering} from './vardering'
@Component({
  selector: 'app-varderingar',
  templateUrl: './varderingar.component.html',
  styleUrls: ['./varderingar.component.css']
})
export class VarderingarComponent implements OnInit {

  varderingar: Vardering[] = [];
  isCollapsed = false;

  constructor(private varderingarService:VarderingarService) { }

  getVarderingar(): void {
    this.varderingar = this.varderingarService.getVarderingar();
  }

  ngOnInit(): void {
    this.getVarderingar();
  }

}
