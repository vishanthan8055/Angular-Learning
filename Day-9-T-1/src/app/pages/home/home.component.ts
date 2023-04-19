import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  servicelist:any;
      constructor(private hs:HomeService){
        this.hs.getServices().subscribe(
          {
            next: (data:any)=> this.servicelist =data,
            error: ()=> this.servicelist=[]
          }
        )
      }
}
