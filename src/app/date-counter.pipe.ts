import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {


  transform(value: any): any {
    const currentDay: Date = new Date();
    const todayWithNoTime: any = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());


    const dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;

    const dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 ) {
      return dateCounter;
    } else {
      return 'ten days ago';
    }


  }

  }
