import { Component, OnInit } from '@angular/core';
interface accessory{
  name:string,
  price:any
} 
@Component({
  selector: 'app-acceseries',
  templateUrl: './acceseries.component.html',
  styleUrls: ['./acceseries.component.css']
})
export class AcceseriesComponent implements OnInit {
 title:string='Hi! Here are the acceseries u want.';
 tagline:string='Be Happy';
 gadgets:accessory={
   name:"Gadgets",
   price:"200Rs-1200Rs"
 }
 jackets:accessory={
   name:"Jackets",
   price:"500Rs-9999Rs"
 }
 shoes:accessory={
   name:"Shoes",
   price:"300Rs-4999Rs"
 }
 watches:accessory={
   name:"Watches",
   price:"250Rs-5000Rs"
 }
 necklaces:accessory={
   name:"Necklaces",
   price:"200Rs-2000Rs"
 }
  constructor() { }

  ngOnInit(): void {
  }

}
