import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lokalen',
  templateUrl: './lokalen.component.html',
  styleUrls: ['./lokalen.component.css']
})
export class LokalenComponent implements OnInit {

  constructor() { }

  images = ["../../assets/lokalen.jpg", "../../assets/lokalen2.jpg", "../../assets/lokalen3.jpg"]

  ngOnInit(): void {
  }

}
