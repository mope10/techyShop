import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../../../../services/auth/authservice.service';
import {user} from '../../../../services/auth/authservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  private password: string;
  validityStatement = "";
  private validity= false;
  private User:user;
  
  
  constructor(private fb: FormBuilder,private auth: AuthserviceService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  savePassword(password: string,rePassword:string) {
    this.password = password;
    if(rePassword) {
      if (this.password === rePassword) {
        this.validityStatement = "fa fa-check"
        this.validity = true;
      }
      else {
        this.validityStatement = "fa fa-times"
        this.validity = false;
      }
    }
  }
  comparePassword(password: string) {
    if (password) {
      if (this.password === password) {
        this.validity = true;
        this.validityStatement="fa fa-check";
  
      }
      else {
        this.validity = false;
        this.validityStatement = "fa fa-times"
      }
    }
    
    
  }
  createForm() {
    this.registrationForm = this.fb.group({
      firstName  : ['',[Validators.required]],
      lastName   : ['',[Validators.required]],
      email      : ['',[Validators.required,Validators.email]],
      phoneNumber: ['',[Validators.required,Validators.minLength(11)]],
      password   : ['',[Validators.required,Validators.minLength(8)]],
      rePassword: ['',[Validators.required]],
      address    : ['',[Validators.required]]
    });
  }
  registerUser(firstName,lastName,password,emailAddress,phoneNumber,address){
    this.User = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: emailAddress,
      number: phoneNumber,
      address: address
    }
    console.log(this.User);
    this.auth.createUser(this.User).subscribe((value)=>console.log(value),(err)=> console.log(err),()=> this.router.navigate(['/','login']));
  }
}
