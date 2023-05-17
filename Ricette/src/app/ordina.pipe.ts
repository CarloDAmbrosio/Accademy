import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordina'
})
export class OrdinaPipe implements PipeTransform {

 
  transform(value: any[], field: string): any[] {
    if (!value || !value.length) return [];
    if (!field) return value;

    return value.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  }

}
