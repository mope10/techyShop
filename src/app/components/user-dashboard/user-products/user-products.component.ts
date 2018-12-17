import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../services/auth/authservice.service';
import { shopRequest,DataService, itemData } from "../../../../services/dataService/data.service";
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {Cloudinary} from '@cloudinary/angular-5.x';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  name; BName; priceS; amount; detail; img; caty;
  selectedLaptop = false; selectedMobile = false; selectedAccessories = false; selectedGaming = false; selectedDisplay = false; selectedSpeaker = false; 
  AddingItemForm: FormGroup;
  EdittingItemForm: FormGroup;
  itemCreated: boolean;
  responses: Array<any>;
  imageProgress: any;
  hasBaseDropZoneOver: boolean = false;
  validityStatement = "";
  validity = false;
  uploader: FileUploader;
  message = "";
  formCondition   = true;
  editing = false
  MyFilter;
  pOrder = 1;
  pItem =1;


  // For shop request

  shopOwner = "";
  shopAddress= "";
  shopNumber = "";

  //end

  showTable = false;
  status = "";
  confirmation = "";
  id = "";
  showOrder = true;

  key = "id";
  reverse = false;

  //TO CHANGE
  dataOrder = [];
  dataItems;

  file: File;
  constructor(private fb: FormBuilder, private auth: AuthserviceService,private cloudinary: Cloudinary,private zone : NgZone, private datas: DataService) {
    this.getData();
    this.createForm();
    this.responses = [];

  }

  ngOnInit(): void {
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      // Add built-in and custom tags for displaying the uploaded photo in the list
      let tags = 'myphotoalbum';
      
      // Upload to a custom folder
      // Note that by default, when uploading via the API, folders are not automatically created in your Media Library.
      // In order to automatically create the folders based on the API requests,
      // please go to your account upload settings and set the 'Auto-create folders' option to enabled.
      form.append('folder', 'items');
      // Add custom tags
      form.append('tags', tags);
      // Add file to upload
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    // Insert or update an entry in the responses array
    const upsertResponse = fileItem => {
      console.log(fileItem);
      // Run the update in a custom zone since for some reason change detection isn't performed
      // as part of the XHR request to upload the files.
      // Running in a custom zone forces change detection
        // Update an existing entry if it's upload hasn't completed yet
        // Find the id of an existing item
        if(fileItem.status == 200){
          this.imageProgress = fileItem.file.name + ' 100% Complete '
          this.fileNameChecker(fileItem.file.name);
        }
        else if(fileItem.progress){
          this.imageProgress = "uploading..." + fileItem.progress
        }
        const existingId = this.responses.reduce((prev, current, index) => {
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if (existingId > -1) {
          // Update existing item with new data
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
        } else {
          // Create new response
          this.responses.push(fileItem);
        }
  
    };

    // Update model on completion of uploading a file
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
      );

    // Update model on upload progress event
    this.uploader.onProgressItem = (fileItem: any, progress: any) =>
      upsertResponse(
        {
          file: fileItem.file,
          progress,
          data: {}
        }
      );
  }
  changeImage(image, cat){
    this.img = image;
    this.caty = cat;
  }
  getData() {
    this.datas.getUserData().subscribe((e) => {
      this.status = e.user.accountType;
      this.shopAddress = e.user.address;
      this.shopNumber  = e.user.phoneNumber;
      this.shopOwner   = e.user.firstName + " " + e.user.lastName;
      this.id = e.user._id;
      console.log(e.user._id, this.id);
      this.checkprev();
      this.getItems();
      this.getOrders();
    });
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
    this.validityStatement = "You must choose a jpeg or png format picture."
  }
  createForm() {
    this.AddingItemForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      brandName: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      details: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      file: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
    });
    this.EdittingItemForm = this.fb.group({
      productName: ['', [Validators.maxLength(50)]],
      brandName: ['', [ Validators.maxLength(50)]],
      price: ['', [Validators.pattern('[0-9]*')]],
      details: ['', [Validators.minLength(10), Validators.maxLength(255)]],
      file: ['', []],
      amount: ['', [Validators.min(0)]],
      categoryV: ['', []],
    });
  }
  catReset(){
    this.selectedLaptop = false; 
    this.selectedMobile = false;
    this.selectedAccessories = false;
    this.selectedGaming = false; 
    this.selectedDisplay = false; 
    this.selectedSpeaker = false; 
  }
  goToForm(){
    this.name = "";
    this.BName = "";
    this.amount = "";
    this.priceS = "";
    this.img = "";
    this.detail = "";

    this.formCondition = !this.formCondition;
  }
  addItem(productName, brandName, price, details, amount, category){
    console.log(productName, brandName, price, details,amount, category);
    price = parseInt(price);
    amount = parseInt(amount);
    
    let image = this.responses.pop().data.url
    let item: itemData = {
      name: productName,
      brand: brandName,
      price: price,
      amount: amount,
      category: category,
      image: image,
      detail: details
    }
    console.log(item);
    this.datas.createItem(item).subscribe((e)=>{
      this.auth.setToken(e.token);
      this.itemCreated = e.creation;
    });
    this.goToForm();
  }
  editItem(productName, brandName, price, details, amount, category){
    //TODO: ADD LOGIC HERE
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
 
  deleteImage = function (data: any, index: number) {
    const url = `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/delete_by_token`;
    const headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
    const options = { headers: headers };
    const body = {
      token: data.delete_token
    };
    this.http.post(url, body, options).subscribe(response => {
      console.log(`Deleted image - ${data.public_id} ${response.result}`);
      // Remove deleted item for responses
      this.responses.splice(index, 1);
    });
  };

  getFileProperties(fileProperties: any) {
    // Transforms Javascript Object to an iterable to be used by *ngFor
    if (!fileProperties) {
      return null;
    }
    return Object.keys(fileProperties)
      .map((key) => ({ 'key': key, 'value': fileProperties[key] }));
  }

  checkprev(){
    console.log(this.status);
    if(this.status == "shop") {
      this.showTable = true;
    }
    
  }
  makeRequest() {
    var shopRequest: shopRequest = {
      shopOwner   : this.shopOwner,
      shopAddress : this.shopAddress,
      shopNumber  : this.shopNumber

    }
    this.datas.makeShopRequest(shopRequest).subscribe((e)=>{
      this.auth.setToken(e.token);
      if(e.result){
        this.confirmation = "your request has been passed to the administrator";
      }
      
    })
  }
  getOrders(){
    this.datas.getOrder().subscribe((orders)=>{
      console.log(orders.orders);
      this.auth.setToken(orders.token);
      this.dataOrder = orders.orders;
      console.log(this.dataOrder,orders.orders);
    });
  }
  getItems(){
    this.datas.getItems().subscribe((items)=>{
      this.dataItems = items;
      console.log(this.id);
      console.log(items)
      console.log(this.dataItems);
    })
  }
  goToEditForm(){
    this.catReset();
    this.editing = !this.editing;
  } 
  editValues(prdName, amnt, price,cat,img,detail,brand) {
    this.name = prdName;
    this.BName = brand;
    this.amount = amnt;
    this.priceS = price;
    this.img = img;
    this.detail = detail;
    this.caty = cat;
    this.goToEditForm();
    if(cat=="Mobile")
      this.selectedMobile = true;
    else if(cat == "Laptop")
      this.selectedLaptop = true;
    else if(cat == "Speaker")
      this.selectedSpeaker = true;
    else if(cat == "Accessories")
      this.selectedAccessories = true;
    else if(cat == "Display")
      this.selectedDisplay = true;
    else if(cat == "Gaming")
      this.selectedGaming = true;
    console.log(prdName, amnt, price,cat,img,detail);
  }

  deleteRow(id) {
    console.log(id);
  }
  showItems(){
    this.showOrder = true;
    console.log(this.showOrder);
  }

  showOrders(){
    this.showOrder = false;
    console.log(this.showOrder);
  }
}