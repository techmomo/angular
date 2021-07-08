import { Pipe, PipeTransform } from '@angular/core';
import { MPower } from '../../MPower';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(num: MPower): number {
    return Math.pow(num.val,num.pow);
  }
  
}
