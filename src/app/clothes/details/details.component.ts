import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public users:string;
  public posts:string;
  constructor(private detailsSrv:DetailsService) { }
  

  ngOnInit() {  
    this.getUsers();
    this.getPosts();
  }
 public getUsers():void{  //inroder to collect data getuser method need to triggered from some where so we call it from ngoninit
   this.detailsSrv.getUsers().subscribe(
     res=>{
      console.log(res);
      this.users =res;
     },
     err=>{
      console.log(err);
      
     }
   );
 }
 public getPosts():void{
   this.detailsSrv.getPosts().subscribe(
     res=>{
      console.log(res);
      this.posts = res;
     },
     err=>{
      console.log(err);
      
     }
   );
 }
}
