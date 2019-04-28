import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { StoreComponent } from './store.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { FilterPipeCategory } from 'src/pipe/filterCategory.pipe';
import { FilterPipeAmount } from 'src/pipe/filterAmount.pipe';
import { PaginatePipe, NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe } from 'ng2-search-filter';


describe('StoreComponent', () => {
    let fixture: ComponentFixture<StoreComponent>;
    let comp: StoreComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ StoreComponent, FilterPipeCategory, FilterPipeAmount, Ng2SearchPipe ],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule, RouterTestingModule, NgxPaginationModule    ],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(StoreComponent);
            comp = fixture.componentInstance;
        });
    }));

    it(`data should call getItems() and get data`, async(() => {
        expect(comp.data[0].name).toBe("Speakers");
    }));
});