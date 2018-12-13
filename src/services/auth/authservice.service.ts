import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay, throwIfEmpty} from 'rxjs/operators';
import {Router} from '@angular/router'
import {environment_url} from "../../environments/environment";


export interface user {
  firstName: any,
  lastName: any,
  password: any,
  email: any,
  number: any,
  address: any 
}
export interface account {

  email: any,
  password: any


}
export interface authorization {
  token: any,
  accountType: any,
  expiresIn: any,
  id : any
}
export interface creation {
  creation: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http:HttpClient,private router:Router) {
   }

  createUser(User: user): Observable<creation>{
    var url = environment_url + "/users"+"/create";
    
   return this.http.post<creation>(url,User);
  }
  login(account: account){
    var url = environment_url + "/login";
    this.http.post<authorization>(url,account).subscribe((e)=>{
      localStorage.setItem("token",e.token);
      localStorage.setItem("accountType",e.accountType);
      localStorage.setItem("userId",e.id);
      if (e.token){
        if(e.accountType == "admin"){
          this.router.navigate(['admin','home']);

        }
        else if(e.accountType == "user") {
          this.router.navigate(['user','history'])
        }
      }
    });

  }
  isauthenticated() {
    var token = this.getToken()
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  getAccountType() {
    return localStorage.getItem('accountType');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  removeToken(){
    localStorage.removeItem('token');
  }

  isToken() {
    if(localStorage.getItem('token')) {
      return true;

    }
    else {
      return false;
    }
  }
  setToken(token){
    localStorage.setItem('token',token)
    if(token == null){
      localStorage.removeItem('token');

    }
    if(!this.isauthenticated()){
      localStorage.removeItem('token');
      localStorage.removeItem('accountType');
      localStorage.removeItem('userId');
      this.router.navigate(['/']);
    }
  }
  getId(){
    if(this.isToken()){
      return localStorage.getItem('userId');
    }
    
  }

  goToProfile() {
    var type = this.getAccountType();
    if(type == "admin") {
      this.router.navigate(['admin','home']);
    }
    else if(type == 'user') {
      this.router.navigate(['user','history']);
    }
  }
}


