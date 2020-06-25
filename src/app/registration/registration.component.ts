import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title:string="Registration";
  info:string="Here is data";
  constructor() { }

  ngOnInit(): void {
  }
  public sendData(firstname,lastname,age,nationality,location,email):any{
  var user={
    firstname:firstname.value,
    lastname:lastname.value,
    age:age.value,
    nationality:nationality.value,
    location:location.value,
    email:email.value
  }
  console.log(user);
  }
  public sampleData($event){
    console.log($event.target.value);
  }
}
