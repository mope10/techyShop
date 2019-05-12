import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { UserProductsComponent } from './user-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { FilterPipeCategory } from 'src/pipe/filterCategory.pipe';
import { FilterPipeAmount } from 'src/pipe/filterAmount.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipeID } from 'src/pipe/filterID.pipe';
import { Cloudinary, CloudinaryModule } from '@cloudinary/angular-5.x';
import { FileUploadModule } from 'ng2-file-upload';



describe('UserProductsComponent', () => {
    let fixture: ComponentFixture<UserProductsComponent>;
    let comp: UserProductsComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserProductsComponent, FilterPipeCategory, FilterPipeAmount, Ng2SearchPipe,OrderPipe, FilterPipeID],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }, FileUploadModule, CloudinaryModule]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserProductsComponent);   
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call geOrders() and get dataOrder`, async(() => {
        expect(comp.dataOrder[0].productName).toBe("Speakers");
    }));

    it(`Component should call checkPerv() and decide to Show Table`, async(() => {
        expect(comp.showTable).toBeTruthy();
    }));

    it(`Component should call getItems() and get dataItems`, async(() => {
        expect(comp.dataItems[0].name).toBe("Speakers");
    }));

    it(`Component should call getData() and store user data in correct variables`, async(() => {
        expect(comp.shopNumber).toBe("033312312312");
    }));

     it(`extension jpg is correct validity should be set to false`, async(() => {
        comp.fileNameChecker("jpg");
        expect(comp.validity).toBeFalsy();
    }));

    it(`extension docx is incorrect validity should be set to true`, async(() => {
        comp.fileNameChecker("docx");
        expect(comp.validity).toBeTruthy();
    }));

    it(`should set validity false for filename having multiple dots with correct extension`, async(() => {
        comp.fileNameChecker("my.name.jpg");
        expect(comp.validity).toBeFalsy();
    }));

    it(`expect file extension to be case insenstivitive`, async(() => {
        comp.fileNameChecker("mope.JPG");
        expect(comp.validity).toBeFalsy();
    }));
    it(`fuzzy testing passing " in a string`, async(() => {
        comp.fileNameChecker("\".jpg");
        expect(comp.validity).toBeFalsy();
    }));
    it(`Adding form valid entries`, async(() => {
        comp.AddingItemForm.controls['productName'].setValue('asad');
        comp.AddingItemForm.controls['brandName'].setValue('sed');
        comp.AddingItemForm.controls['price'].setValue('231321');
        comp.AddingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.AddingItemForm.controls['file'].setValue('aadaaadas');
        comp.AddingItemForm.controls['amount'].setValue('4500');
        comp.AddingItemForm.controls['category'].setValue('aadaaadas');
        expect(comp.AddingItemForm.valid).toBeTruthy();
    }));
    it(`Adding form invalid for non numeric input in price`, async(() => {
        comp.AddingItemForm.controls['productName'].setValue('asad');
        comp.AddingItemForm.controls['brandName'].setValue('sed');
        comp.AddingItemForm.controls['price'].setValue('23132a1');
        comp.AddingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.AddingItemForm.controls['file'].setValue('aadaaadas');
        comp.AddingItemForm.controls['amount'].setValue('4500');
        comp.AddingItemForm.controls['category'].setValue('aadaaadas');
        expect(comp.AddingItemForm.valid).toBeFalsy();
    }));
    it(`Adding form invalid for non numeric input in amount`, async(() => {
        comp.AddingItemForm.controls['productName'].setValue('asad');
        comp.AddingItemForm.controls['brandName'].setValue('sed');
        comp.AddingItemForm.controls['price'].setValue('231321');
        comp.AddingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.AddingItemForm.controls['file'].setValue('aadaaadas');
        comp.AddingItemForm.controls['amount'].setValue('adsa');
        comp.AddingItemForm.controls['category'].setValue('aadaaadas');
        expect(comp.AddingItemForm.valid).toBeFalsy();
    }));

    it(`Editing form valid entries`, async(() => {
        comp.EdittingItemForm.controls['productName'].setValue('asad');
        comp.EdittingItemForm.controls['brandName'].setValue('sed');
        comp.EdittingItemForm.controls['price'].setValue('231321');
        comp.EdittingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.EdittingItemForm.controls['file'].setValue('aadaaadas');
        comp.EdittingItemForm.controls['amount'].setValue('4542');
        comp.EdittingItemForm.controls['categoryV'].setValue('aadaaadas');
        expect(comp.EdittingItemForm.valid).toBeTruthy();
    }));
    it(`Editing form invalid for non numeric input in price`, async(() => {
        comp.EdittingItemForm.controls['productName'].setValue('asad');
        comp.EdittingItemForm.controls['brandName'].setValue('sed');
        comp.EdittingItemForm.controls['price'].setValue('231s321');
        comp.EdittingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.EdittingItemForm.controls['file'].setValue('aadaaadas');
        comp.EdittingItemForm.controls['amount'].setValue('adsa');
        comp.EdittingItemForm.controls['categoryV'].setValue('aadaaadas');
        expect(comp.EdittingItemForm.valid).toBeFalsy();
    }));

    it(`Editing form invalid for non numeric input in amount`, async(() => {
        comp.EdittingItemForm.controls['productName'].setValue('asad');
        comp.EdittingItemForm.controls['brandName'].setValue('sed');
        comp.EdittingItemForm.controls['price'].setValue('231321');
        comp.EdittingItemForm.controls['details'].setValue('sddffgsdfsdfsasad');
        comp.EdittingItemForm.controls['file'].setValue('aadaaadas');
        comp.EdittingItemForm.controls['amount'].setValue('adssa');
        comp.EdittingItemForm.controls['categoryV'].setValue('aadaaadas');
        expect(comp.EdittingItemForm.valid).toBeFalsy();
    }));

    it(`Creating new item`, async(() => {
        comp.addItem("mope", "sid", 5444, "here are some details get ready", 4500, "Speakers");
        expect(comp.itemCreated).toBeTruthy();
    }));
    
    it(`Editting a exsisting item`, async(() => {
        comp.editItem("mope", "sid", 5444, "here are some details get ready", 4500, "Speakers");
        expect(comp.name).toBe("mope");
    }));
    
});