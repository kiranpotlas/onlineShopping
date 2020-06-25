import { Component, OnInit } from '@angular/core';
import {ClothesService} from '../clothes/clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent implements OnInit{

  ngOnInit(){}
  public clothes:string='Best online products';
  
  constructor(private clothesSrv:ClothesService){}
  public getData():string{
    // let clothesSrv = new ClothesService();
    // return this.clothesSrv;
   return this.clothesSrv.getData();
  }
}