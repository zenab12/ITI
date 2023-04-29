import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class CounterPipe implements PipeTransform {
  transform(items: any[]): number {
    return items ? items.length : 0;
  }
}
