import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(products: any, min_v: string, max_v:string): any {
    return products.filter((x:any)=>(parseInt(x.price)<=parseInt(max_v) && parseInt(x.price)>=parseInt(min_v)))
  }

}
