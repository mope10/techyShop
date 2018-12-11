import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../services/auth/authservice.service';
<<<<<<< HEAD
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {Cloudinary} from '@cloudinary/angular-5.x';

=======
import { identifierModuleUrl } from '@angular/compiler';
>>>>>>> 0d3ce7a8f709e27ab247c87ed2476b1ed8af542b

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.scss']
})
export class AdminInventoryComponent implements OnInit {
  AddingItemForm: FormGroup;
  responses: Array<any>;
  private hasBaseDropZoneOver: boolean = false;
  private password: string;
  validityStatement = "";
  private validity = false;
  private uploader: FileUploader;
  private message = "";
  formCondition   = true;
<<<<<<< HEAD
  file: File;
  data = new FormData();
  constructor(private fb: FormBuilder, private auth: AuthserviceService,private cloudinary: Cloudinary,private zone : NgZone) {
=======
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
>>>>>>> 0d3ce7a8f709e27ab247c87ed2476b1ed8af542b
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

      // Run the update in a custom zone since for some reason change detection isn't performed
      // as part of the XHR request to upload the files.
      // Running in a custom zone forces change detection
      this.zone.run(() => {
        // Update an existing entry if it's upload hasn't completed yet

        // Find the id of an existing item
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
      });
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
<<<<<<< HEAD
  fileNameChecker(fileName: string,file) {
    this.file = file.target.files[0];
    console.log(this.file);
    this.data.append('picture',this.file);
    console.log(this.data);
=======
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
>>>>>>> 0d3ce7a8f709e27ab247c87ed2476b1ed8af542b
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
    console.log(productName, brandName, price, details, image);
    console.log(this.responses,"seomthigndsjbksdf");
  }
  editItem(productName, brandName, price, details, image){
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
}
