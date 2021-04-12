import { Injectable } from '@angular/core';
import {Varderingar} from './mock-vardering'
@Injectable({
  providedIn: 'root'
})
export class VarderingarService {

  public getVarderingar() {
    return Varderingar
  }
  constructor() { }
}
