import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirpodsComponent } from './airpods/airpods.component';
import { CoustomerCareComponent } from './coustomer-care/coustomer-care.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { MyorderComponent } from './myorder/myorder.component';
import { OrderComponent } from './order/order.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrimmerComponent } from './trimmer/trimmer.component';
import { TvComponent } from './tv/tv.component';
import { WatchComponent } from './watch/watch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"airpods",component:AirpodsComponent},
  {path:"laptop",component:LaptopComponent},
  {path:"mobile",component:MobileComponent},
  {path:"trimmer",component:TrimmerComponent},
  {path:"tv",component:TvComponent},
  {path:"watch",component:WatchComponent},
  {path:"login",component:LoginComponent},
  {path:"help",component:CoustomerCareComponent},
  {path:"order",component:OrderComponent},
  {path:"download",component:DownloadAppComponent},
  {path:"myorder",component:MyorderComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"product",component:ProductsComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
