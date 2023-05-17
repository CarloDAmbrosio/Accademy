import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPipe'
})
export class FiltroPipePipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[]{

    if (!value || !searchTerm) {
      return value;
    }

    return value.filter((item: any) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
