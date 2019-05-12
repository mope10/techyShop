import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { DataService } from 'src/services/dataService/data.service';
import { DataServiceMock } from 'src/app/mock/data.service.mock';

describe('SideNavComponent', () => {
    let fixture: ComponentFixture<SideNavComponent>;
    let comp: SideNavComponent;
    let de : DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideNavComponent],
            imports: [ ],
            providers: [{ provide: DataService, useClass: DataServiceMock }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(SideNavComponent);
            comp = fixture.componentInstance;
        });
    }));

    it(`return false if no value is in type`, async(() => {
        let result  = comp.checkuser();
        expect(result).toBeFalsy();
    }));
});