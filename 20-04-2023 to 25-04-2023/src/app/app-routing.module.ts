import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DatailsComponent } from './card/datails/datails.component';


const routes: Routes = [
  {path:"",component:CardComponent },
  {path:"complaints", component: ComplaintsComponent},
  {path:":id", component:DatailsComponent}  
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
