import { Injectable } from '@angular/core';
import { IMAGEURLS } from './mock-imageurls';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  constructor() { }

  getImages(): String[] {
    return IMAGEURLS
  }
}
