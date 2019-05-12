import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { UserHistoryComponent } from './user-history.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { FilterPipeCategory } from 'src/pipe/filterCategory.pipe';
import { FilterPipeAmount } from 'src/pipe/filterAmount.pipe';
import { PaginatePipe, NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { OrderPipe } from 'ngx-order-pipe';
import { FileUploadModule } from 'ng2-file-upload';


describe('UserHistoryComponent', () => {
    let fixture: ComponentFixture<UserHistoryComponent>;
    let comp: UserHistoryComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserHistoryComponent, FilterPipeCategory, FilterPipeAmount, Ng2SearchPipe,OrderPipe ],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule ],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserHistoryComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getUserOrders() and get data`, async(() => {
        expect(comp.data[0].productName).toBe("Speakers");
    }));

     it(`should call the sort method`, async(() => {
        spyOn(comp, 'sort');
        el = fixture.debugElement.query(By.css('#test')).nativeElement;
        el.click();
        expect(comp.sort).toHaveBeenCalled();
    }));


});