import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilkComponent } from '../silk/silk.component';
import { CottonComponent } from '../cotton/cotton.component';
import { HandloomComponent } from '../handloom/handloom.component';
import { SyntheticFiberComponent } from '../synthetic-fiber/synthetic-fiber.component';
import { WoolComponent } from '../wool/wool.component';
import { Routes, RouterModule } from '@angular/router';
const materialsRoute:Routes=[
  {path:'materials/cotton',component:CottonComponent},
  {path:'materials/handloom',component:HandloomComponent},
  {path:'materials/silk',component:SilkComponent},
  {path:'materials/syntheticFiber',component:SyntheticFiberComponent},
  {path:'materials/wool',component:WoolComponent}
]
@NgModule({
  declarations: [CottonComponent,SilkComponent,HandloomComponent,SyntheticFiberComponent,WoolComponent],
  imports: [
    CommonModule,RouterModule.forChild(materialsRoute)
  ],
  exports:[RouterModule]
})
export class MaterialsModuleModule { }
