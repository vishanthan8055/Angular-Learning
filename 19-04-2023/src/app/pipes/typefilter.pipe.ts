import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(feedlist: any, type: string): any {
    if(type=="All")
       return feedlist;

    return feedlist.filter((x:any)=>x.type == type)
  }

}