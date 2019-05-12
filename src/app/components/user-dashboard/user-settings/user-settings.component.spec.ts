import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { UserSettingsComponent } from './user-settings.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';



describe('UserSettingsComponent', () => {
    let fixture: ComponentFixture<UserSettingsComponent>;
    let comp: UserSettingsComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserSettingsComponent],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserSettingsComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getUserOrders() and get data`, async(() => {
        expect(comp.firstName).toBe("mope");
    }));

    it(`editEnable should enable editting`, async(() => {
        comp.editEnable("mope","sid",21312,"dsadasdda");
        expect(comp.editDisabled).toBeFalsy;
    }));

    it(`editDisable should enable editting`, async(() => {
        comp.editDisable();
        expect(comp.editDisabled).toBeTruthy;
    }));

    // it(`editDisable should enable editting`, async(() => {
    //     comp.editDisable();
    //     expect(comp.editDisabled).toBeTruthy;
    // }));
});