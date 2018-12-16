import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterAmount'
})
export class FilterPipeAmount implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      if(it.amount != 0)
        return it;
    });
   }
}