import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterRequests'
})
export class FilterPipeRequests implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(it => {
      if(it.shopPrivilages == searchText)
        return it.toLowerCase().includes("");
    });
  }
}