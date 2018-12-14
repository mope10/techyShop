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
export interface order {
  owner_id        : Number,
  productId       : Number,
  productName     : any,
  productPrice    : Number,
  orderStatus     : any,
  user_id         : Number,
  username        : any,
  user_address    : any,
  user_phoneNumber: any
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
<<<<<<< HEAD
    
    let token = this.auth.getToken()
    const httpOptions = new HttpHeaders({'id':id, 'token': token})
=======
    var id = this.auth.getId();
    let token = this.auth.getToken()
    const httpOptions = new HttpHeaders({'id': id,'token': token})
>>>>>>> 4054dbab23157f33625c4294886d222a8b8b28e6
    return this.http.post<creation>(url,item,{headers: httpOptions});
    
  }
  createOrder(){

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
