import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(value: number, multiple: number = 1 , cutter: string): unknown {
    return value * multiple + " " + cutter;
  }

}
