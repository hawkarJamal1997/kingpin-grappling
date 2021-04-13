import { Injectable } from '@angular/core';
import {Inriktningar} from './mock-inriktning'

@Injectable({
  providedIn: 'root'
})
export class InriktningarService {
  public getInriktningar() {
      return Inriktningar
    }
  constructor() { }
}
