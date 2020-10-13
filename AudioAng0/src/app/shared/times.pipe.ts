import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {
  transform(value: number, factor: number): number {
    return value * factor;
  }
}
