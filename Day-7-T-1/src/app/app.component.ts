import { Component } from '@angular/core';
import {datafields} from './appInfo/appDet'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondApp';
  dataitems=datafields
  services:string[] =datafields.servicelist;
  descriptions:string[]=
  [
    datafields.appservices,
    datafields.testservices,
    datafields.cloudservices
  ]
  imgs:string[] = ["icn-1.png",
    "icn-2.png",
    "icn-3.png",
  ]
}
