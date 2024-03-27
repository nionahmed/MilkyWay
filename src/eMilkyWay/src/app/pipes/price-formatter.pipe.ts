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
    const integerPart = Math.trunc(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    const decimalPart = (decimalCount > 0) ? decimalSeparator + (Math.abs(value) - Math.abs(Math.trunc(value))).toFixed(decimalCount).slice(2) : '';

    return currencySymbol + ' ' + integerPart + decimalPart;
  }

}
