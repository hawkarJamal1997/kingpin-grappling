import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lat = 57.800070330053934;
  lng = 14.272610113148467;

  constructor() { }

  ngOnInit(): void {
  }

}
