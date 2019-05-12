import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { NotificationsComponent } from './notifications.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderPipe } from 'ngx-order-pipe';
import { PaginatePipe, NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeRequests } from 'src/pipe/filterRequests.pipe';



describe('NotificationsComponent', () => {
    let fixture: ComponentFixture<NotificationsComponent>;
    let comp: NotificationsComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NotificationsComponent, OrderPipe, FilterPipeRequests],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(NotificationsComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getShops() and get data`, async(() => {
        expect(comp.data[0].shopOwner).toBe("mope");
    }));

    it(`calling shwoShop() should set variable showshopRequest to false`, async(() => {
        comp.showShops();
        expect(comp.showShopRequest).toBeFalsy();
    }));

    it(`calling showRequests() should set variable showshopRequest to true`, async(() => {
        comp.showRequests();
        expect(comp.showShopRequest).toBeTruthy();
    }));
});