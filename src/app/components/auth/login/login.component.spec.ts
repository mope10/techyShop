import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Browser } from 'protractor';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let comp: LoginComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent ],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,HttpModule, RouterTestingModule]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoginComponent);
            comp = fixture.componentInstance;

            de = fixture.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));
    // it(`should call the login method`, async(() => {
    //     spyOn(comp, 'login');
    //     comp.loginForm.controls['email'].setValue('asd@asd.com');
    //     comp.loginForm.controls['password'].setValue('aadaaadas');
    //     el = fixture.debugElement.query(By.css('.button-register .btn')).nativeElement;
    //     el.click();
    //     expect(comp.login).toHaveBeenCalled();
    // }));

    it("Starting Category Should be All", async(() => {
        expect(comp.notification).toBe("");
    }));

    it(`form should be valid`, async(() => {
        comp.loginForm.controls['email'].setValue('asd@asd.com');
        comp.loginForm.controls['password'].setValue('aadaaadas');
        expect(comp.loginForm.valid).toBeTruthy();
    }));
    it(`form should be invalid for wrong email`, async(() => {
        comp.loginForm.controls['email'].setValue('asd');
        comp.loginForm.controls['password'].setValue('aadaaadas');
        expect(comp.loginForm.valid).toBeFalsy();
    }));
    it(`form should be invalid for wrong password`, async(() => {
        comp.loginForm.controls['email'].setValue('asd@asd.com');
        comp.loginForm.controls['password'].setValue('aadaaad');
        expect(comp.loginForm.valid).toBeFalsy();
    }));
});
