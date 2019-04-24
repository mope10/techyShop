import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {shareReplay, throwIfEmpty,map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment_url} from "../../environments/environment";
import {AuthserviceService} from "../auth/authservice.service";

export interface userData {
  _id: any,
  firstName: any,
  lastName: any,
  emailAddress: any,
  phoneNumber: any,
  address: any,
  accountType: any
  
  
}

export interface message {
  token: any,
  message : boolean
}

export interface itemData {
  name: any,
  brand: any,
  price: Number,
  image: any,
  detail: any,
  amount: Number,
  category: any
}
export interface userToken{
  token: any,
  user : userData
}

export interface creation {
  creation: boolean,
  token:any
  
}

export interface itemList {
  owner_id: any,
  _id: any,
  name: any,
  brand: any,
  price: Number,
  category: any,
  image: any,
  detail: any,
  amount: Number
}
export interface orderCreating {
  owner_id        : Number,
  item_id       : Number,
}

export interface order {

  orderStatus: String,
  _id: Number,
  owner_id: Number,
  productId: Number,
  productName: String,
  productPrice: Number,
  user_id: Number,
  username: String,
  user_address: String,
  user_phoneNumber: String

}


export interface shopRequest{
  shopOwner: any,
  shopAddress: any,
  shopNumber : any
}

export interface requestreply{
  token: any,
  result: boolean
}

export interface validatedOrder {

  token: any,
  orders: order[]

}

export interface adminShop {
  token: any,
  shopRequests: adminShopRequests[]
}
export interface adminShopRequests {
  owner_id: any,
  shopPrivilages: boolean,
  shopRequest:    boolean,
  shopOwner  : any,
  shopAddress: any,
  shopNumber : any
}

export interface shopItems {
  shopItems: itemList[],
  token: any
}


export interface orderUpdate {
  orderStatus: any,
  order_id   : any
}

export interface orderDelete {
  item_id : any,
  order_id: any
}

export interface ownerShopData {
  token: any,
  shop: adminShopRequests
}


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private messageSource = new BehaviorSubject('All');
  currentMessage = this.messageSource.asObservable();


  constructor(private http: HttpClient, private router: Router,private auth: AuthserviceService) { 
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  getUserData(){
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/user'
    const httpOptions = new HttpHeaders({'id': id,'token': token});
    return this.http.get<userToken>(url,{headers: httpOptions});
    
  }
  createItem(item: itemData){
    var url = environment_url + '/item'+'/create'
    var id = this.auth.getId();
    console.log('Data service creater id is: ', id);
    var condition = false;
    
    let token = this.auth.getToken()
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.post<creation>(url,item,{headers: httpOptions});
    
  }
  createOrder(order: orderCreating): Observable<message>{
    var url = environment_url + '/order' + '/create'
    var id = this.auth.getId();
    var token = this.auth.getToken();
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.post<message>(url,order,{headers: httpOptions});

  }
  getOrder(): Observable<validatedOrder> {
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/order/' + id;
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.get<validatedOrder>(url,{headers: httpOptions});
  }

  changeOrderStatus(orderUpdate: orderUpdate):Observable<requestreply>{

    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/order' + '/update';
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.post<requestreply>(url,orderUpdate,{headers: httpOptions});    

  }

  deleteOrder(order:orderDelete):Observable<requestreply>{
    console.log('in delete order');
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/order' + '/delete';
    console.log(url)
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.post<requestreply>(url,order,{headers: httpOptions});    

  }

  getUserOrders(): Observable<validatedOrder> {
    var id = this.auth.getId();
    var token = this.auth.getToken();
    console.log('user id is: ',id);
    var url = environment_url + '/order'+ '/user/' + id;
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.get<validatedOrder>(url,{headers: httpOptions});
  }
  
  getItems():  Observable<itemList[]>{
    let url = environment_url + 'item'
    return this.http.get<itemList[]>(url);
  }
  getItem(id):Observable<itemList>{
    let url = environment_url + 'item'+id;
    return this.http.get<itemList>(url);
  }


  // Shop code

  makeShopRequest(request: shopRequest): Observable<requestreply>{
    var id = this.auth.getId();
    var token = this.auth.getToken();
    console.log('user id is: ',id);
    var url = environment_url + '/shop'+'/request';
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.post<requestreply>(url,request,{headers: httpOptions});

  }

  getShopRequests(): Observable<adminShop>{
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/shopRequests';
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.get<adminShop>(url,{headers: httpOptions});
  }
  getShopItems() : Observable<shopItems>{
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/shopItems';
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.get<shopItems>(url,{headers: httpOptions});
  }

  upgradeShop(owner_id):Observable<requestreply>{
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/shop'+'/upgrade/'+owner_id;
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.post<requestreply>(url,{owner_id: owner_id},{headers: httpOptions});
  }

  downgradeShop(owner_id):Observable<requestreply>{
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/shop'+'/downgrade/'+owner_id;
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.post<requestreply>(url,{owner_id: owner_id},{headers: httpOptions});
  }

  getShop(): Observable<ownerShopData> {
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/shop';
    const httpOptions = new HttpHeaders({'id':id, 'token': token});
    return this.http.get<ownerShopData>(url,{headers: httpOptions});

  }

}
