import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../services/auth/authservice.service';
import { identifierModuleUrl } from '@angular/compiler';

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
  formCondition   = true;
  key = "id";
  reverse = false;
  pLaptop  = 1;
  pMobile  = 1;
  pAccessory  = 1;
  pGaming  = 1;
  pDisplay  = 1;
  pSpeaker  = 1;
  //TO CHANGE
  data = [{ id: "1", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "2", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "3", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "4", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "5", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "6", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "7", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  { id: "8", productName: "Dell PC", amount: "10", sellPrice: "15000", buyPrice: "13000" },
  ];
  //TO CHANGE
  constructor(private fb: FormBuilder, private auth: AuthserviceService) {
    this.createForm();
  }

  ngOnInit() {
  }
  sort(key){
    if (this.key === key) {
      this.reverse = !this.reverse;
    }
    else {
      this.reverse = false;
    }
    this.key = key;
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
  goToForm(){
    this.formCondition = !this.formCondition;
  }
  addItem(productName, brandName, price, details, image){
    //TODO: ADD LOGIC HERE
    console.log(productName, brandName, price, details, image);
  }
  editItem(productName, brandName, price, details, image){
    //TODO: ADD LOGIC HERE
  }
}
