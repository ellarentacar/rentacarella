import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { CarsComponent } from './modules/pages/cars/cars.component';
import { ContactLocationComponent } from './modules/pages/contact-location/contact-location.component';


const routes: Routes = [
  {
    path:'',
     component:LayoutComponent,
     children:[
      {
        path:'cars',
        component:CarsComponent
      },
      {
        path:'contacts-location',
        component:ContactLocationComponent
      },
      {
        path:'',
        redirectTo:'cars',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
