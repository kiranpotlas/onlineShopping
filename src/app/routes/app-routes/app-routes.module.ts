import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ClothesComponent } from 'src/app/clothes/clothes.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AcceseriesComponent } from 'src/app/acceseries/acceseries.component';
import { EssentialsComponent } from 'src/app/essentials/essentials.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { MaterialsComponent } from 'src/app/materials/materials.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { MaterialsModuleModule } from 'src/app/materials/materials-module/materials-module.module';
import { ClothesModule } from 'src/app/clothes/clothes.module';
import { SignupComponent } from 'src/app/signup/signup.component';

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'acceseries',component:AcceseriesComponent},
  {path:'essentials',component:EssentialsComponent},
  {path:'materials',component:MaterialsComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'register',component:RegistrationComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes),MaterialsModuleModule,ClothesModule
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { }
