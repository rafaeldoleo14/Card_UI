import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardNumber'
})
export class FormatCardNumberPipe implements PipeTransform {

  transform(cardNumber: string): string {

    const number = cardNumber?.toString();

    if (!number) {
      return '';
    }

    // Eliminar espacios en blanco
    const cleanedNumber = number!.replace(/\s/g, '');

    // Tomar los primeros 16 caracteres
    const truncatedNumber = cleanedNumber.slice(0, 16);

    // Dividir en grupos de 4 dígitos
    const formattedGroups = [];
    for (let i = 0; i < truncatedNumber.length; i += 4) {
      formattedGroups.push(truncatedNumber.slice(i, i + 4));
    }

    // Unir con espacios en blanco hasta alcanzar 16 dígitos
    return formattedGroups.join(' ');
  }

}
