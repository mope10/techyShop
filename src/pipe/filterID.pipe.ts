import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterID'
})
export class FilterPipeID implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
return items.filter( it => {
      if(it.owner_id == searchText)
        return it;
    });
   }
}