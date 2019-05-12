import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AdminSettingsComponent } from './admin-settings.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';



describe('AdminSettingsComponent', () => {
    let fixture: ComponentFixture<AdminSettingsComponent>;
    let comp: AdminSettingsComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AdminSettingsComponent],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AdminSettingsComponent);
            comp = fixture.componentInstance;
        });
    }));
    it(`Component should call getData() and get data`, async(() => {
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
    //     comp.editDisable(); SAVE
    //     expect(comp.editDisabled).toBeTruthy;
    // }));
});