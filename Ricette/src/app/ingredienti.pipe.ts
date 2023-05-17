import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredienti'
})
export class IngredientiPipe implements PipeTransform {

  transform(ricette: any, searchTerm: string): any {
    if (!ricette || !searchTerm) {
      return ricette;
    }

    // Filter the ricette array by the ingredienti array's nome property
    return ricette.filter((r: { ingredienti: any[]; }) => r.ingredienti.some(i => i.nome.toLowerCase().includes(searchTerm.toLowerCase())));
  }

}
