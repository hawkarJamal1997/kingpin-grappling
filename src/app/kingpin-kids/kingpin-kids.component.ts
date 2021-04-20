import { Component, OnInit } from '@angular/core';
import { Contact } from './mock-contact';

@Component({
  selector: 'app-kingpin-kids',
  templateUrl: './kingpin-kids.component.html',
  styleUrls: ['./kingpin-kids.component.css']
})
export class KingpinKidsComponent implements OnInit {

  constructor() { }
  contact = Contact
  ngOnInit(): void {
  }

}
