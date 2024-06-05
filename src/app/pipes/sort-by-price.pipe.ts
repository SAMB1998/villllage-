import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(items: any[], sortOrder: string): any[] {
    if (!items) return [];
    if (!sortOrder) return items;
    if (sortOrder === 'asc') {
      return items.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      return items.sort((a, b) => b.price - a.price);
    } else {
      return items;
    }
  }
}
