import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { TrimmerComponent } from './trimmer/trimmer.component';
import { WatchComponent } from './watch/watch.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CoustomerCareComponent } from './coustomer-care/coustomer-care.component';
import { OrderComponent } from './order/order.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { MyorderComponent } from './myorder/myorder.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MobileComponent,
    TvComponent,
    AirpodsComponent,
    TrimmerComponent,
    WatchComponent,
    LaptopComponent,
    FooterComponent,
    LoginComponent,
    CoustomerCareComponent,
    OrderComponent,
    DownloadAppComponent,
    MyorderComponent,
    RegistrationComponent,
    ProductsComponent,
    FilterPipe,
    HeaderComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [{provide:LocationStrategy,useClass:PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
