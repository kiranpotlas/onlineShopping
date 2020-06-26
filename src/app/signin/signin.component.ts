import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
public signinData={};
  constructor(private authSrvsignin:AuthService, private _router:Router) { }
  
  ngOnInit(){
    this.signinUser();
  }
public signinUser():void{
  this.authSrvsignin.signinUser(this.signinData).subscribe(
    res=>{
      console.log(res);
      if(res.auth && res.token){
        this._router.navigate(['/home']);
      }else{
        this._router.navigate(['/registration']);
      }
      },
    err=>{
console.log(err);

    }
  )
  
}
}
