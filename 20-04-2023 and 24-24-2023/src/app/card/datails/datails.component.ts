import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent {
  reviews:any;
  id:any;
   service:any;
   details:any;
  constructor(private hs:ProductService,private ar:ActivatedRoute,rs:ReviewService){
    rs.getReview().subscribe(
      {
        next:(data:any)=>this.reviews=data,
        error:()=>this.reviews={}
      }
    )
     this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )
  }

  readData(){

     this.hs.getDetails(this.id).subscribe({
         next: (data:any)=> this.details =data,
         error: ()=> this.details = {}
     })
  }
  
}
