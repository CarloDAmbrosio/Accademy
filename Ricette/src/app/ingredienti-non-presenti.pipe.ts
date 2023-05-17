import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientiNonPresenti'
})
export class IngredientiNonPresentiPipe implements PipeTransform {

  transform(ricette: any[], ingredientName: string): any[] {
    if (!ricette) {
      return [];
    }

    if (!ingredientName) {
      return ricette;
    }

    // Filter the ricette array by the ingredienti array's nome property
    return ricette.filter(r => !r.ingredienti.some((i: { nome: string; }) => i.nome.toLowerCase() === ingredientName.toLowerCase()));
  }
}
