import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   public registerData:any={};
  constructor(private registerSrv:AuthService) { }

  ngOnInit(){
  this.registerUser();
  }
public registerUser():void{
  this.registerSrv.registerUser(this.registerData).subscribe(
    res=>{
    console.log(res);
    this.registerData=res;
    },
    err=>{
      console.log(err);
     }
  );
   
}
}
