import { Injectable } from '@angular/core';
import { GRAPPLINGTYPE } from './mock-grapplingtype'

@Injectable({
  providedIn: 'root'
})
export class GrapplingTypeService {
  public getGrapplingType() {
      return GRAPPLINGTYPE
    }
  constructor() { }
}
