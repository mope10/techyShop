import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.scss']
})
export class AdminInventoryComponent implements OnInit {
  AddingItemForm: FormGroup;
  private password: string;
  validityStatement = "";
  private validity = false;
  private message = "";


  constructor(private fb: FormBuilder, private auth: AuthserviceService) {
    this.createForm();
  }

  ngOnInit() {
  }
  fileNameChecker(fileName: string) {
    var allowed_extensions = new Array("jpg","png");
    var file_extension = fileName.split('.').pop().toLowerCase();

    for(var i = 0; i <= allowed_extensions.length; i++)
    {
        if(allowed_extensions[i]==file_extension)
        {
            this.validity = false;
            return;
        }
    }

    this.validity = true;
    console.log("was"+fileName);
    this.validityStatement = "You must choose a jpeg or png format picture."
  }
  createForm() {
    this.AddingItemForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      brandName: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      details: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      file: ['', [Validators.required]],

    });
  }
  addItem(productName, brandName, price, details, image){
    //TODO: ADD LOGIC HERE
  }
  editItem(productName, brandName, price, details, image){
    //TODO: ADD LOGIC HERE
  }
}
