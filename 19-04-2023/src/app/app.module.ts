import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { FeedboxComponent } from './pages/testimonial/feedbox/feedbox.component';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './pipes/typefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    TestimonialComponent,
    ContactComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    FeedboxComponent,
    QuoteitPipe,
    TypefilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
