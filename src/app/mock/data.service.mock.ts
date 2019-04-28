import { Injectable } from '@angular/core';
import { itemList } from 'src/services/dataService/data.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class DataServiceMock {
  constructor() { }
  data =[{owner_id: 0,_id: 0 ,name: "Speakers", brand: "Sony", price: 30000, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"},
        {owner_id: 0,_id: 0 ,name: "TV", brand: "Sony", price: 30000, amount: 6, category: "Display",detail: "Very good display",image: "image2.jpg"},
        {owner_id: 0,_id: 0 ,name: "Speakers", brand: "Sony", price: 300300, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"}]

  getItems(): Observable<any> {
      return of(this.data);
  }

  getItem(id):Observable<itemList> {
    return of({owner_id: 0,_id: 0 ,name: "Speakers", brand: "Sony", price: 30000, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"});
  }

  getUserOrders() {
    return of([{orders:{orderStatus: "completed",
              owner_id: 0,
              productId: 0,
              productName: "Speakers",
              productPrice: 30000,
              user_address: "house no 153, Street no 11, E-11/4",
              user_id: 10,
              user_phoneNumber: "33352959212",
              username: "Mustafasiddique",
              __v: 0,
              _id: 17}}])
  }
}
