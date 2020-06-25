import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../services/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  materials:any=[];
  constructor(private materialSrv:MaterialsService) { }

  ngOnInit(){
    return this.materialSrv.getMaterials().subscribe(
      res=>{
        console.log(res);
        this.materials=res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}
