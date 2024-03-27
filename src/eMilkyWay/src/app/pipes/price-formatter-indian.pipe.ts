import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatterIndian',
  standalone: true
})
export class PriceFormatterIndianPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$', decimalCount: number = 2, decimalSeparator: string = '.', separator: string = ','): string {
    if (isNaN(value) || value === null || value === undefined) {
      return ''; 
    }
    const formattedValue = value.toFixed(decimalCount).toString();
    const firstPart= formattedValue.slice(0,-3);
    const lastPart= formattedValue.slice(-3);


    const firstPartFormattedValue = firstPart.replace(/\B(?=(\d{2})+(?!\d))/g, separator);

    return currencySymbol + ' ' + firstPartFormattedValue+','+lastPart;
  }
}
