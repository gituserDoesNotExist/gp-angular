import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuComponent } from './sudoku.component';
import { HttpClientTestingModule } from '@angular/common/http/testing/src/module';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrlValues } from '../url-constants/AppUrlValues';
import { Router } from '@angular/router/';
import { RouterTestingModule } from '@angular/router/testing';

class RouterStub {

}

describe('SudokuComponent', () => {
  let component: SudokuComponent;
  let fixture: ComponentFixture<SudokuComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke router with correct arguments when calling "goToDashboard()"', () => {
    spyOn(router,'navigate').and.returnValue("egal");

    component.goToDashboard();

    expect(router.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should invoke router with correct arguments when clicking "goToDashboard()"', () => {
    spyOn(router,'navigate').and.returnValue("egal");

    let htmlElement = HTMLElement = fixture.debugElement.nativeElement.querySelector('.button-back');
    htmlElement.click();

    expect(router.navigate).toHaveBeenCalledWith(['dashboard']);
  });
});
