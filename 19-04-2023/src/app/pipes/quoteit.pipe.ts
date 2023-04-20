import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteit'
})
export class QuoteitPipe implements PipeTransform {

  transform(target: string): string {
    let regex=/(great|excellent|good|perfect|satisfied)/
    if(regex.test(target.toLowerCase()))
      return '"'+target+'"'
    return target
}

}
