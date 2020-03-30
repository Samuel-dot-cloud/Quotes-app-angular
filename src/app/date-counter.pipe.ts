import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {


  transform(value: any): number {
    const currentDay: Date = new Date();
    const todayWithNoTime: any = new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate());
    //gets userinput date

    var dateDifference = Math.abs(todayWithNoTime-value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if(dateCounter >= 1 ){
      return dateCounter;
    } else {
      return 0;
    }


  }

  }
