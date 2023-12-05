import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCard'
})
export class MaskCardPipe implements PipeTransform {

  transform(cardNumber: number): string {

    const card = cardNumber.toString();

    // Verificar si el número de tarjeta es válido y tiene al menos 16 dígitos
    
    if (card && card.length === 16) {

      // Obtener los primeros 12 dígitos
      const firstPart = card.slice(0, 2);

      // Obtener los últimos 4 dígitos
      const lastPart = card.slice(-4);

      // Crear la cadena enmascarada
      const maskedCreditCard = `${firstPart}**********${lastPart}`;

      return maskedCreditCard;
    } else {

      // Devolver el número de tarjeta sin cambios si no es válido
      return card;
    }
  }

}
