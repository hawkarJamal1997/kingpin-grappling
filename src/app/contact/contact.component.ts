import { Contact } from './mock-contact';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contact = Contact
  ngOnInit(): void {
  }

}
