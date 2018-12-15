import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterOrder'
})
export class FilterPipeOrder implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.orderStatus.toLowerCase().includes(searchText);
    });
   }
}