import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   public registerData={};
  constructor() { }

  ngOnInit(): void {
  }
public registerUser():void{
  console.log(this.registerData);
  
}
}
