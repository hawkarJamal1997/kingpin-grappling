import { Observable } from 'rxjs';
import { ContactService } from './contact.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Message } from './message';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  didSend: boolean = false
  messageForm = this.formBuilder.group({
    name: '',
    email: '',
    message: ''
  })

  constructor( private contactService: ContactService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.contactService.submitMessage(this.messageForm.value)
      .subscribe(_ => {
        this.didSend = true,
        this.messageForm.reset()
      })
  }
}
