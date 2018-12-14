import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay, throwIfEmpty,map} from 'rxjs/operators';
import {Router} from '@angular/router'
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
  message : boolean;
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

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient, private router: Router,private auth: AuthserviceService) { 
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
  getOrder(): Observable<order[]> {
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/order/' + id;
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
    return this.http.get<order[]>(url,{headers: httpOptions});
  }
  
  getItems():  Observable<itemList[]>{
    let url = environment_url + '/item'
    return this.http.get<itemList[]>(url);
  }
  getItem(id):Observable<itemList>{
    let url = environment_url + '/item'+id;
    return this.http.get<itemList>(url);
  }
}
