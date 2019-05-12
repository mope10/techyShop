import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AdminHomeComponent } from './admin-home.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';



describe('AdminHomeComponent', () => {
    let fixture: ComponentFixture<AdminHomeComponent>;
    let comp: AdminHomeComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminHomeComponent],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AdminHomeComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getDataStatus() and count number of item according to its order status`, async(() => {
        comp.getOrders();
        expect(comp.dataStatus[2].y).toBe(1);
    }));

    it(`Component should call getDatacategory() and count number of item according to category`, async(() => {
        comp.getItems();
        expect(comp.dataCategory[5].y).toBe(2);
    }));
});