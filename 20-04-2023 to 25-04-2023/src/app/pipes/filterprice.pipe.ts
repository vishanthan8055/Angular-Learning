import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(products: any, min_v: number, max_v:number): any {
    if(max_v===5000){
      return products.filter((x:any)=>(parseInt(x.price)>=min_v))
    }
    return products.filter((x:any)=>(parseInt(x.price)<=max_v && parseInt(x.price)>=min_v))
  }
}
