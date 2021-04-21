import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-medlemskap',
  templateUrl: './medlemskap.component.html',
  styleUrls: ['./medlemskap.component.css']
})
export class MedlemskapComponent implements OnInit {
  constructor() { }
  

  total: number = 0

  form = new FormGroup({
    choice: new FormControl(''),
    student:new FormControl(false),
    membership: new FormControl(false)
  });

  valueChanged(){
    const formValue = this.form.value;

    this.total = formValue.choice as number;
    this.total -= 0;


    if(formValue.student && (formValue.choice == 1600 || formValue.choice == 2000 )){
      this.total  -= 400 ;
    }
    if(formValue.membership){
      let holder:number = this.total;
      holder = holder + 100 ;
      this.total = holder as number;
    }
    console.log(this.total);
  }
  ngOnInit(): void {
  }
}
