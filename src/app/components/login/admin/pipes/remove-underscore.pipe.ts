import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore',
})
export class RemoveUnderscorePipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes('_')) {
      return value.split('_').join(' ');
    }
    return value;
  }
}
