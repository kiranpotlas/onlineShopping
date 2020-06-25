import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutesModule } from './routes/app-routes/app-routes.module';
import { AcceseriesComponent } from './acceseries/acceseries.component';
import { HomeComponent } from './home/home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaterialsComponent } from './materials/materials.component';
import {FormsModule} from '@angular/forms';
import { ClothesService} from './clothes/clothes.service';
import { DetailsService } from './clothes/details/details.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { MaterialsService } from './services/materials.service';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, FooterComponent,ClothesComponent,HomeComponent,AcceseriesComponent,EssentialsComponent, NavigationComponent, NotFoundComponent, SigninComponent, RegistrationComponent, AboutComponent, ContactusComponent, MaterialsComponent, SignupComponent],
  imports: [
    BrowserModule,AppRoutesModule,FormsModule,HttpClientModule
  ],
  providers: [ClothesService,DetailsService,MaterialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
