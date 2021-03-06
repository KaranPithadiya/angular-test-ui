import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToDays'
})
export class DateToDaysPipe implements PipeTransform {

  transform(value : string): string {
    const dayAgo = ' days ago';
    let day = 0;
    let datediffInTime = 0;
    let rowDate = new Date(value);
    let currentDate = new Date();
    datediffInTime = currentDate.getTime() - rowDate.getDate();
    day = Math.ceil(datediffInTime/ (1000 * 60 * 60 * 24));
    let res;
    if(day === 7){
      console.log("days1:",day);
      res = '1' + dayAgo;
    }else if(day > 7){
      console.log("days2:",day);
      let date = rowDate.getDate() < 10 ? '0' + rowDate.getDate() : rowDate.getDate();
      let month = (rowDate.getMonth()+1) < 10 ? '0' + (rowDate.getMonth()+1) : rowDate.getMonth()+1;
      let yr = rowDate.getFullYear(); 
      res = date + '/' + month + '/' + yr;
    }else {
      console.log("days3:",day);
      res = day + dayAgo;
    }
    day = 0;
    datediffInTime = 0;
    return res;
  }

}
