import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router'

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
  condition: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http:HttpClient,private router:Router) { }

  createUser(User: user): Observable<user>{
   return this.http.post<user>("http://localhost:8000/users/create",User);
  }
  login(account: account): Observable<authorization>{
    return this.http.post<authorization>("http://localhost:8000/login",account);

  }
}
