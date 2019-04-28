import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';
import { FilterPipeCategory } from 'src/pipe/filterCategory.pipe';
import { FilterPipeAmount } from 'src/pipe/filterAmount.pipe';


describe('LandingPageComponent', () => {
    let fixture: ComponentFixture<LandingPageComponent>;
    let comp: LandingPageComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LandingPageComponent, FilterPipeCategory, FilterPipeAmount ],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,HttpModule, RouterTestingModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LandingPageComponent);
            comp = fixture.componentInstance;
        });
    }));

    it(`data should call get items and get data`, async(() => {
        expect(comp.data[0].name).toBe("Speakers");
    }));
});