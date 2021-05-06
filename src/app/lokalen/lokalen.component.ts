import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lokalen',
  templateUrl: './lokalen.component.html',
  styleUrls: ['./lokalen.component.css']
})
export class LokalenComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }

}
