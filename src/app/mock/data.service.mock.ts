import { Injectable } from '@angular/core';
import { itemList, validatedOrder, userToken, shopItems, ownerShopData, itemData, creation, adminShop, orderUpdate, requestreply, orderDelete } from 'src/services/dataService/data.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class DataServiceMock {
  constructor() { }
  data =[{owner_id: 0,_id: 0 ,name: "Speakers", brand: "Sony", price: 30000, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"},
        {owner_id: 0,_id: 1 ,name: "TV", brand: "Sony", price: 30000, amount: 6, category: "Display",detail: "Very good display",image: "image2.jpg"},
        {owner_id: 0,_id: 2 ,name: "Speakers", brand: "Sony", price: 300300, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"}]
  Orders = {token: 1 ,orders:[{orderStatus: "completed",owner_id: 0,productId: 0,productName: "Speakers",productPrice: 30000,user_address: "house no 153, Street no 11, E-11/4",user_id: 10,user_phoneNumber: "33352959212",username: "Mustafasiddique",__v: 0,_id: 1},
                              {orderStatus: "pending",owner_id: 0,productId: 1,productName: "TV",productPrice: 20000,user_address: "house no 153, Street no 11, E-11/4",user_id: 10,user_phoneNumber: "33352959212",username: "Mustafasiddique",__v: 0,_id: 2}]};
  User =  {token: 1 ,user:{_id: 2,firstName:"mope",lastName:"10",emailAddress:"mo@fasda.com",address:"skjdjk",accountType:"hello", phoneNumber: "033312312312"}};
  Shop = {shopItems: this.data, token: 1};

  ownerShop = {token:1, shop:{owner_id:2,shopPrivilages:true,shopRequest:true,shopOwner:"mope",shopAddress:"ajd",shopNumber:"sadsa"}};
  createItemData = {token:1, creation: true};
  shopRequests = {token: 1, shopRequests: [{ owner_id: 2,shopPrivilages:true,shopRequest:true,shopOwner:"mope",shopAddress:"ajd",shopNumber:"sadsa"}]};
  getItems(): Observable<itemList[]> {
      return of(this.data);
  }

  getItem(id):Observable<itemList> {
    return of({owner_id: 0,_id: 0 ,name: "Speakers", brand: "Sony", price: 30000, amount: 36, category: "Speaker",detail: "Very good speakers",image: "image.jpg"});
  }

  getUserOrders() : Observable<validatedOrder> {
    return of(this.Orders)
  }
  getOrder() : Observable<validatedOrder> {
    return of(this.Orders)
  }
  getUserData() : Observable<userToken> {
    return of(this.User);
  }

  getShopItems() : Observable<shopItems> {
    return of(this.Shop)
  }
  getShop() : Observable<ownerShopData> {
    return of(this.ownerShop);
  }

  createItem(item: itemData)  {
    return of(this.createItemData)
  }

  getShopRequests(): Observable<adminShop>{
    return of(this.shopRequests);
  }

  changeOrderStatus(orderUpdate: orderUpdate):Observable<requestreply>{
    let fail = {token:1,result:false};
    let pass = {token:1,result:true};
    if(orderUpdate.orderStatus == "pending") {
      if(orderUpdate.order_id == 1)
        this.Orders.orders[0].orderStatus = "pending";
      else if(orderUpdate.order_id == 2)
        this.Orders.orders[1].orderStatus = "pending";
      else
        return of(fail);
    } else if(orderUpdate.orderStatus == "processing") {
        if(orderUpdate.order_id == 1)
          this.Orders.orders[0].orderStatus = "processing";
        else if(orderUpdate.order_id == 2)
          this.Orders.orders[1].orderStatus = "processing";
        else
          return of(fail);
    } else if(orderUpdate.orderStatus == "completed") {
        if(orderUpdate.order_id == 1)
          this.Orders.orders[0].orderStatus = "completed";
        else if(orderUpdate.order_id == 2)
          this.Orders.orders[1].orderStatus = "completed";
        else
          return of(fail);
    } else
        return of(fail);
  return of(pass);
  }

  deleteOrder(orderUpdate: orderDelete):Observable<requestreply>{
    let fail = {token:1,result:false};
    let pass = {token:1,result:true};
    if(orderUpdate.item_id == 0 && orderUpdate.order_id == 1) {
        this.Orders.orders = [this.Orders.orders[1]];
        return of(pass);
    } else if(orderUpdate.item_id == 1 && orderUpdate.order_id == 2) {
          this.Orders.orders = [this.Orders.orders[0]];
          return of(pass);
    } else
        return of(fail);
  }
}
