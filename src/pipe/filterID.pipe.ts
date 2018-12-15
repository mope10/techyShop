import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterID'
})
export class FilterPipeID implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.owner_id.toLowerCase().includes(searchText);
    });
   }
}