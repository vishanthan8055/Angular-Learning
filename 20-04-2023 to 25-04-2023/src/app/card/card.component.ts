import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  types=[
    "All",
    "Watch",
    "Groceries",
    "Books",
    "Electronics",
    "Cosmetics"
  ]
  selected="All";
  prodlist:any;
  min_v=0;
  max_v=2000;
  isD = "none";
  constructor(ps:ProductService){
    ps.getProducts().subscribe(
      {
        next: (data:any) => this.prodlist = data,
        error:()=>this.prodlist = []
      }
    )
   
  }
}
