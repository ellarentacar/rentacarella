import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './modules/pages/cars/cars.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { CardComponent } from './modules/components/card/card.component';
import { ContactLocationComponent } from './modules/pages/contact-location/contact-location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    HomeComponent,
    CarsComponent,
    CardComponent,
    ContactLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
