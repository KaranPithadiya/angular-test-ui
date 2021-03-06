import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToDays'
})
export class DateToDaysPipe implements PipeTransform {

  transform(value : string): string {
    const dayAgo = ' days ago';
    const oneDay = 1000 * 60 * 60 * 24;
    const rowDate = new Date(value);
    const currentDate = new Date();
    const datediffInTime = currentDate.getTime() - rowDate.getTime();
    let day = Math.ceil(datediffInTime/ oneDay);
    let res;
    if(day === 7){
      res = '1' + dayAgo;
    }else if(day > 7){
      let date = rowDate.getDate() < 10 ? '0' + rowDate.getDate() : rowDate.getDate();
      let month = (rowDate.getMonth()+1) < 10 ? '0' + (rowDate.getMonth()+1) : rowDate.getMonth()+1;
      let yr = rowDate.getFullYear(); 
      res = date + '/' + month + '/' + yr;
    }else {
      res = day + dayAgo;
    }
    return res;
  }

}
