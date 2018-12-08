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
export interface userToken{
  token: any,
  user : userData
}



@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http: HttpClient, private router: Router,private auth: AuthserviceService) { 
  }
  verify(verification: Observable<userToken>){
    verification.subscribe((e)=>{
      if (e.token == null){
        console.log('removing token');
        this.auth.removeToken();
        this.router.navigate(['']);
        
      }
    });
  }
  getUserData(){
    var id = this.auth.getId();
    var token = this.auth.getToken();
    var url = environment_url + '/user'
    console.log(id,token);
    const httpOptions = new HttpHeaders({'id': id,'token': token});
    const verification = this.http.get<userToken>(url,{headers: httpOptions});
    this.verify(verification);
    return verification;
  }
}
