import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Price} from './price'
import {PriceListService} from './price-list.service'
@Component({
  selector: 'app-medlemskap',
  templateUrl: './medlemskap.component.html',
  styleUrls: ['./medlemskap.component.css']
})
export class MedlemskapComponent implements OnInit {
  constructor(private priceListService: PriceListService) { }
  total: number = 0;
  priceList : Price[] = [];
  currentChoice:Price = {
    id:0,
    name:'',
    value:0,
  };

  form = new FormGroup({
    choice: new FormControl(''),
    student:new FormControl(false),
    membership: new FormControl(false)
  });

  getPriceList(): void {
    this.priceList = this.priceListService.getPriceList();
  }

  choiceChanged(choice:Price){
    this.currentChoice= choice;
    this.total = choice.value;
    this.total -= 0;
    console.log(this.total);
    let formValue = this.form.value;
    formValue.student = false;
    this.studentValueChanged()
    this.memberChanged()

  }

  memberChanged(){
    let formValue = this.form.value;
    if(formValue.membership == true && this.currentChoice.value > 0  ){
      this.total += 100 ;
    }
  }
  studentValueChanged(){
    let formValue = this.form.value;
    this.total -= 0;
    if(this.currentChoice?.studentPrice && formValue.student){
      this.total  = this.currentChoice?.studentPrice;
    }else if(formValue.student==false){
      this.total  = this.currentChoice?.value;
    }
  }

  ngOnInit(): void {
    this.getPriceList();
  }
}
