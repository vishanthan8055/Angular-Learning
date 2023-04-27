import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev'
})
export class RevPipe implements PipeTransform {

  transform(reviews: any, prod:string): any {
    return reviews.filter((x:any)=>x.product == prod)
  }

}
