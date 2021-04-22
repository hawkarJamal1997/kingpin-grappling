import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Price} from './price'
import {PriceListService} from './price-list.service'
import {PaymentMethod} from './paymentMethod';
import {PaymentMethodsService} from './payment-methods.service'
@Component({
  selector: 'app-medlemskap',
  templateUrl: './medlemskap.component.html',
  styleUrls: ['./medlemskap.component.css'],

})
export class MedlemskapComponent implements OnInit {
  constructor(private priceListService: PriceListService, private paymentMethodsService: PaymentMethodsService) { }
  total: number = 0;
  priceList : Price[] = [];
  paymentMethods : PaymentMethod[] = [];
  disabled = false;
  
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

  getPaymentMethodsList():void{
    this.paymentMethods = this.paymentMethodsService.getPaymentMethod();
  }

  choiceChanged(choice:Price){
    this.currentChoice= choice;
    this.total = choice.value;
    this.total -= 0;
    console.log(this.total);
    this.valueChanged()

  }

  
  valueChanged(){
    let formValue = this.form.value;
    this.total -= 0;
    if(this.currentChoice?.studentPrice && formValue.student){
      this.total  = this.currentChoice?.studentPrice;
    }else if(formValue.student==false){
      this.total  = this.currentChoice.value;
    }

    if(formValue.membership == true && this.currentChoice.value > 0 &&  formValue.student && this.currentChoice?.studentPrice){
      this.total  = this.currentChoice.studentPrice + 100;
    }else if(formValue.membership == true ){
      this.total  = this.currentChoice.value + 100;
    }

  }

  ngOnInit(): void {
    this.getPriceList();
    this.getPaymentMethodsList();
  }
}
