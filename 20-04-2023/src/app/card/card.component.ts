import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  prodlist:any;
  constructor(ps:ProductService){
    ps.getProducts().subscribe(
      {
        next: (data:any) => this.prodlist = data,
        error:()=>this.prodlist = []
      }
    )
  }
}
