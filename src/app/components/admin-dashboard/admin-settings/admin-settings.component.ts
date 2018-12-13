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
  lastName = "";
  status = "";
  address = "";
  number = "";

  fname = "";
  lname = "";
  add = "";
  phNo = "";
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
      statusV: ['', []]
    });
  }

  getData() {
    this.data.getUserData().subscribe((e) => {
      this.firstName = e.user.firstName;
      this.lastName = e.user.lastName;
      this.address = e.user.address;
      this.status = e.user.accountType;
      this.number = e.user.phoneNumber;
    });
  }
  editEnable(firstName, lastName, number, address) {
    this.fname = firstName;
    this.lname = lastName;
    this.phNo = number;
    this.add = address;
    this.editDisabled = false;
    console.log(this.fname, this.lname, this.phNo, this.add);

  }
  editDisable() {
    this.firstName = this.fname; 
    this.lastName = this.lname;
    this.address = this.add;
    this.number = this.phNo;
    this.editDisabled = true;
    console.log(this.firstName, this.lastName, this.address, this.number);

  }

  save(firstName, lastName, number, address) {
    //TODO: ADD LOGIC HERE
    console.log(firstName, lastName, number, address);
    this.editDisabled = true;
  }
}
