import { Injectable } from '@angular/core';
import {KingpinKidsList} from './mock-kingpinKids'
@Injectable({
  providedIn: 'root'
})
export class KingpinKidsService {
  public getContent() {
    return KingpinKidsList
  }
  constructor() { }
}

