import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../../../services/dataService/data.service";

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  firstName = "";
  lastName  = "";
  status    = "";
  address   = "";
  number    = "";

  EditingAdminInfo: FormGroup;
  editDisabled = true;
  constructor(private data: DataService, private fb: FormBuilder) {
    this.getData();
    this.createForm();
   }
  
  ngOnInit() {
  }
  createForm() {
    this.EditingAdminInfo = this.fb.group({
      firstNameV: ['', [Validators.required, Validators.maxLength(30)]],
      lastNameV: ['', [Validators.required, Validators.maxLength(30)]],
      phoneNumberV: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      addressV: ['', [Validators.required, Validators.maxLength(250)]],

    });
  }

  getData(){
    this.data.getUserData().subscribe((e)=>{
      this.firstName = e.user.firstName;
      this.lastName  = e.user.lastName;
      this.address   = e.user.address;
      this.status    = e.user.accountType;
      this.number    = e.user.phoneNumber;
    });
  }
  editEnable(){
    this.editDisabled = false;
  }
  editDisable() {
    this.editDisabled = true;
  }
  save(firstName, lastName, number, address ){
    //TODO: ADD LOGIC HERE
    console.log(firstName, lastName, number, address);
    this.editDisabled = true;
  }
}
