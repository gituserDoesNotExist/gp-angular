import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeComponent } from './tictactoe.component';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrlValues } from '../url-constants/AppUrlValues';
import { Router } from '@angular/router/';
import { TicTacToeService } from './tictactoe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameWithFieldsMapper } from './model/game-with-fields-mapper';

describe('TictactoeComponent', () => {
  let component: TictactoeComponent;
  let fixture: ComponentFixture<TictactoeComponent>;
  let routerStub: Router;

  beforeEach(async(() => {
    routerStub = jasmine.createSpyObj('routerStub',['navigate']);
    TestBed.configureTestingModule({
      declarations: [ TictactoeComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        TicTacToeService,
        {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues},
        {provide: Router, useValue: routerStub},
        GameWithFieldsMapper
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke router when calling "goToDashboard"', () => {
    component.goToDashboard();

    expect(routerStub.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should invoke router when calling "goToDashboard"', () => {
    let htmlElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.button-back');
    htmlElement.click();

    expect(routerStub.navigate).toHaveBeenCalledWith(['dashboard']);
  });
});
