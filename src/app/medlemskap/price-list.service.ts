import { Injectable } from '@angular/core';
import {PriceList} from './mock-priceList';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {
  public getPriceList(){
    return PriceList;
  }
  constructor() { }
}
