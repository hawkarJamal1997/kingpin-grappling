import { Injectable } from '@angular/core';
import {paymentMethodList} from './mock-paymentMethod'

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  public getPaymentMethod(){
    return paymentMethodList
  }

  
  constructor() { }
}
