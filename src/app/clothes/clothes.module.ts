import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PlaceComponent } from './place/place.component';
import { TypesComponent } from './types/types.component';
const clothesRoute:Routes=[
  {path:'clothes/details',component:DetailsComponent},
  {path:'clothes/place',component:PlaceComponent},
  {path:'clothes/types',component:TypesComponent}
]

@NgModule({
  declarations: [DetailsComponent,PlaceComponent,TypesComponent],
  imports: [
    CommonModule,RouterModule.forChild(clothesRoute)
  ],
  exports:[RouterModule]
})
export class ClothesModule { }
