import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrlValues } from '../url-constants/AppUrlValues';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { HttpClientTestingModule, HttpTestingController, TestRequest  } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AppUrls } from '../url-constants/app.url.interface';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';




describe('DashboardComponent', () => {

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: DashboardService;
  let router: Router;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientTestingModule,RouterTestingModule
      ],
      providers: [
        {provide: DashboardService, useClass: DashboardService},
        {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues}
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DashboardService);
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.getDescription()).toEqual("");
    expect(fixture.debugElement.nativeElement.querySelector('.infobox').textContent).toEqual("");
  });



  it('should display the description for sudoku (using real service)', fakeAsync(() => {
    const expectedText: string = 'This game is called Tic Tac Toe and the number of players is 1 or 2';

    component.createSudokuInfo();
    simulateResponse();
    tick(800);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.getDescription()).toEqual(expectedText);      
      expect(fixture.debugElement.nativeElement.querySelector('.infobox').textContent).toEqual(expectedText);
    });
  }));

  it('should display the description for sudoku (mocking the real service)', fakeAsync(() => {
    spyOn(service, 'getDescriptionForSudoku').and.returnValue(of("some sudoku"));

    component.createSudokuInfo();

    tick(800);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.getDescription()).toEqual('some sudoku');
    });
  }));

  it('should display the description for tic tac toe (mocking the real service)', fakeAsync(() => {
    spyOn(service, 'getDescriptionForTicTacToe').and.returnValue(of("some tic tac toe"));

    component.createTicTacToeInfo();

    tick(800);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.getDescription()).toEqual('some tic tac toe');
    });
  }));

  it('should call router with "sudoku"', () => {
    spyOn(router, 'navigate').and.returnValue("egal");

    component.playSudoku();

    expect(router.navigate).toHaveBeenCalledWith(['sudoku']);
  });

  it('should call router with "tic tac toe"', () => {
    spyOn(router, 'navigate').and.returnValue("egal");

    component.playTicTacToe();

    expect(router.navigate).toHaveBeenCalledWith(['tictactoe']);
  });

  it('should call router with correct url when clicking "play sudoku"', () => {
    spyOn(router, 'navigate').and.returnValue("egal");

    let htmlElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.play-sudoku');
    htmlElement.click();

    expect(router.navigate).toHaveBeenCalledWith(['sudoku']);
  });

  it('should call router with correct url when clicking "play tictactoe"', () => {
    spyOn(router, 'navigate').and.returnValue("egal");

    let htmlElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.play-tictactoe');
    htmlElement.click();

    expect(router.navigate).toHaveBeenCalledWith(['tictactoe']);
  });


  function simulateResponse() {
    let req: TestRequest = httpMock.expectOne({
      url: "./assets/description-sudoku.json",
      method: 'GET'
    });
    req.flush({"name":"Tic Tac Toe","numberOfPlayers":"1 or 2"});    
  }

});

