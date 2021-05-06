import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  muteVideo(){
    let vid = document.getElementById("video");
    //vid. = true; 
  }

  constructor() { }

  ngOnInit(): void {
    this.muteVideo()
  }

}
