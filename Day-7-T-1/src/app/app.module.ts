import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppnavComponent } from './appnav/appnav.component';
import { AppbannerComponent } from './appbanner/appbanner.component';
import { AppcentComponent } from './appcent/appcent.component';
import { AppboxComponent } from './appbox/appbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AppnavComponent,
    AppbannerComponent,
    AppcentComponent,
    AppboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
