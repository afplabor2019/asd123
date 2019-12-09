import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LogosComponent } from './logos/logos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { EmailComponent } from './email/email.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

import { AddEmployeeService } from './services/add-employee.service';
import { GetEmployeeService } from './services/get-employee.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminSubscribersComponent } from './admin-subscribers/admin-subscribers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SlideshowComponent,
    LogosComponent,
    NavbarComponent,
    AdvertisementComponent,
    EmailComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminSubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AddEmployeeService, GetEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
