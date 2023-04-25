import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CardBoxComponent } from './card/card-box/card-box.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterpricePipe } from './pipes/filterprice.pipe';
import { FiltertypePipe } from './pipes/filtertype.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBoxComponent,
    FilterpricePipe,
    FiltertypePipe,
    ComplaintsComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
