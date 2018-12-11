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
    console.log(environment_url);
   }

  createUser(User: user): Observable<creation>{
    var url = environment_url + "/users"+"/create";
    
   return this.http.post<creation>(url,User);
  }
  login(account: account){
    console.log("in login");
    var url = environment_url + "/login";
    this.http.post<authorization>(url,account).subscribe((e)=>{
      localStorage.setItem("token",e.token);
      localStorage.setItem("accountType",e.accountType);
      localStorage.setItem("userId",e.id);
      if (e.token){
        if(e.accountType == "admin"){
          console.log("in admin");
          this.router.navigate(['admin','home']);

        }
        else if(e.accountType == "user") {
          this.router.navigate(['user','history'])
        }
      }
    });

  }
  isauthenticated() {
    console.log("protecting route");
    var token = this.getToken()
    console.log(token);
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
    if(!this.isauthenticated()){
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
    console.log(localStorage.getItem('accountType'));
    if(type == "admin") {
      this.router.navigate(['admin','home']);
    }
    else if(type == 'user') {
      this.router.navigate(['user','history']);
    }
  }
}


