import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any): any[] {
    if(!Array.isArray(value)){
      return value;
    }
    return value.sort((a, b) => b.updated_at.localeCompare(a.updated_at) );
  }

}
