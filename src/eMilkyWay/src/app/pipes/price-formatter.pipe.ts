import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter',
  standalone: true
})
export class PriceFormatterPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$', decimalCount: number = 2, decimalSeparator: string = '.', thousandsSeparator: string = ','): string {
    if (isNaN(value) || value === null || value === undefined) {
      return ''; 
    }
    const formattedValue = value.toFixed(decimalCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    return currencySymbol + ' ' + formattedValue;
  }

}
