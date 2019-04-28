import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegisterComponent', () => {
    let fixture: ComponentFixture<RegisterComponent>;
    let comp: RegisterComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RegisterComponent ],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,HttpModule, RouterTestingModule]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(RegisterComponent);
            comp = fixture.componentInstance;

        });
    }));
    it("Save if matching password", async(() => {
        comp.savePassword("dansdans","dansdans");
        expect(comp.validity).toBeTruthy;
    }));
    it("donot Save if matching password", async(() => {
        comp.savePassword("dansdans","dankdank");
        expect(comp.validity).toBeFalsy;
    }));
    it(`form should be valid`, async(() => {
        comp.registrationForm.controls['firstName'].setValue('asad');
        comp.registrationForm.controls['lastName'].setValue('sed');
        comp.registrationForm.controls['email'].setValue('asad@sed.com');
        comp.registrationForm.controls['phoneNumber'].setValue('03335295925');
        comp.registrationForm.controls['password'].setValue('aadaaadas');
        comp.registrationForm.controls['rePassword'].setValue('aadaaadas');
        comp.registrationForm.controls['address'].setValue('aadaaadas');
        expect(comp.registrationForm.valid).toBeTruthy();
    }));
    it(`form should be invalid for wrong email`, async(() => {
        comp.registrationForm.controls['firstName'].setValue('asad');
        comp.registrationForm.controls['lastName'].setValue('sed');
        comp.registrationForm.controls['email'].setValue('asadsed.com');
        comp.registrationForm.controls['phoneNumber'].setValue('03335295925');
        comp.registrationForm.controls['password'].setValue('aadaaadas');
        comp.registrationForm.controls['rePassword'].setValue('aadaaadas');
        comp.registrationForm.controls['address'].setValue('aadaaadas');
        expect(comp.registrationForm.valid).toBeFalsy();
    }));
    it(`form should be invalid for not matching password`, async(() => {
        comp.registrationForm.controls['firstName'].setValue('asad');
        comp.registrationForm.controls['lastName'].setValue('sed');
        comp.registrationForm.controls['email'].setValue('asad@sed.com');
        comp.registrationForm.controls['phoneNumber'].setValue('03335295925');
        comp.registrationForm.controls['password'].setValue('aadaaadas');
        comp.registrationForm.controls['rePassword'].setValue('dsdaasda');
        comp.registrationForm.controls['address'].setValue('aadaaadas');
        expect(comp.registrationForm.valid).toBeFalsy();
    }));
    it(`form should be invalid for not repassword length less than 8`, async(() => {
        comp.registrationForm.controls['firstName'].setValue('asad');
        comp.registrationForm.controls['lastName'].setValue('sed');
        comp.registrationForm.controls['email'].setValue('asad@sed.com');
        comp.registrationForm.controls['phoneNumber'].setValue('03335295925');
        comp.registrationForm.controls['password'].setValue('aadaaadas');
        comp.registrationForm.controls['rePassword'].setValue('s');
        comp.registrationForm.controls['address'].setValue('aadaaadas');
        expect(comp.registrationForm.valid).toBeFalsy();
    }));
});