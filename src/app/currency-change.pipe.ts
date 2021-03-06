import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyChange'
})
export class CurrencyChangePipe implements PipeTransform {

  transform(value :number): string { 
    let val = parseFloat((value*0.01).toPrecision(4)); 
   return '$' + val;
  } 

}
