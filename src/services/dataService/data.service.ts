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
  owner: any,
  _id: any,
  name: any,
  brand: any,
  price: Number,
  category: any,
  image: any,
  detail: any,
  amount: Number
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
    console.log(id,token);
    const httpOptions = new HttpHeaders({'id': id,'token': token});
    return this.http.get<userToken>(url,{headers: httpOptions});
    
  }
  createItem(item: itemData){
    var url = environment_url + '/item'+'/create'
    var condition = false;

    let token = this.auth.getToken()
    const httpOptions = new HttpHeaders({'token': token})
    return this.http.post<creation>(url,item,{headers: httpOptions});
    
  }
  getItems():  Observable<itemList[]>{
    let url = environment_url + '/item'
    return this.http.get<itemList[]>(url);
  }
}
