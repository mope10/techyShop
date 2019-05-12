import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AdminOrdersComponent } from './admin-orders.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeOrder } from 'src/pipe/filterOrder.pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { Ng2SearchPipe } from 'ng2-search-filter';



describe('AdminOrdersComponent', () => {
    let fixture: ComponentFixture<AdminOrdersComponent>;
    let comp: AdminOrdersComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminOrdersComponent, FilterPipeOrder, OrderPipe, Ng2SearchPipe],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AdminOrdersComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getOrder() and save data in a variable`, async(() => {
        comp.getOrders();
        expect(comp.data[0].productName).toBe("Speakers");
    }));

    it(`changing status to completed by calling changeStatus`, async(() => {
        comp.changeStatus("completed");
        expect(comp.OrderStatusCurrent).toBe("completed");
    }));

    it(`changing status to pending by calling changeStatus`, async(() => {
        comp.changeStatus("pending");
        expect(comp.OrderStatusCurrent).toBe("pending");
    }));

    it(`changing status to processing by calling changeStatus`, async(() => {
        comp.changeStatus("processing");
        expect(comp.OrderStatusCurrent).toBe("processing");
    }));

    it(`changing status should not be case sensitive`, async(() => {
        comp.changeStatus("Processing");
        expect(comp.OrderStatusCurrent).toBe("processing");
    }));

    it(`fuzzy testing changeStatus should not take input other than status. status should remain same if unreconginized status is given`, async(() => {
        comp.changeStatus("jndsa");
        expect(comp.OrderStatusCurrent).toBe("pending");
    }));

    it(`changing status should change value in the dataservice`, async(() => {
        comp.updateStatus(1,"processing");
        expect(comp.data[0].orderStatus).toBe("processing");
    }));

    it(`changing status of id that doesnt exsists should do nothing`, async(() => {
        comp.updateStatus(4,"processing");
        expect(comp.data[0].orderStatus).toBe("completed");
        expect(comp.data[1].orderStatus).toBe("pending");
    }));

    it(`changing status to unreconginized should do nothing`, async(() => {
        comp.updateStatus(0,"sadas");
        expect(comp.data[0].orderStatus).toBe("completed");
        expect(comp.data[1].orderStatus).toBe("pending");
    }));

    it(`deleting an order no 1`, async(() => {
        comp.DeleteOrder(1,0);
        expect(comp.data[0].orderStatus).toBe("pending");
    }));

    it(`deleting an order no 2`, async(() => {
        comp.DeleteOrder(2,1);
        expect(comp.data[0].orderStatus).toBe("completed");
    }));

    it(`not matching order id and item id`, async(() => {
        comp.DeleteOrder(1,2);
        expect(comp.data[0].orderStatus).toBe("completed");
        expect(comp.data[1].orderStatus).toBe("pending");
    }));

    it(`not exsisting order id`, async(() => {
        comp.DeleteOrder(3,2);
        expect(comp.data[0].orderStatus).toBe("completed");
        expect(comp.data[1].orderStatus).toBe("pending");
    }));
});