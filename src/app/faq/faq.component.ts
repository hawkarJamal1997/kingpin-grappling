import { QUESTIONS } from './mock-questions';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }
  questions = QUESTIONS
  isCollapsed = true;
  ngOnInit(): void {
  }

}
