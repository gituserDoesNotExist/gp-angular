import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeComponent } from './tictactoe.component';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrlValues } from '../url-constants/AppUrlValues';
import { Router } from '@angular/router/';
import { TicTacToeService } from './tictactoe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameWithFieldsMapper } from './model/game-with-fields-mapper';
import { of } from 'rxjs/observable/of';
import { GameWithFieldsFactory } from './test.factory/game-with-fields-factory';
import { Observable } from 'rxjs/Observable';
import { GameWithFields } from './model/game-with-fields';
import { FieldStatus } from './model/field-status';
import { FieldStatusFactory } from './test.factory/field-status-factory';
import { FieldFactory } from './test.factory/field-factory';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { any } from 'ramda';
import { Field } from './model/field';
import { GameStatusFactory } from './test.factory/game-status-factory';
import { AppConstantsInjectionToken } from '../url-constants/AppConstantsInjectionToken';
import { AppConstantsValues } from '../url-constants/app.constants.values';

describe('TictactoeComponent', () => {
  let component: TictactoeComponent;
  let fixture: ComponentFixture<TictactoeComponent>;
  let routerStub: Router;
  let service: TicTacToeService;

  beforeEach(async(() => {
    routerStub = jasmine.createSpyObj('routerStub',['navigate']);
    TestBed.configureTestingModule({
      declarations: [ TictactoeComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        TicTacToeService,
        {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues},
        {provide: AppConstantsInjectionToken, useValue: AppConstantsValues},
        {provide: Router, useValue: routerStub},
        GameWithFieldsMapper
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TicTacToeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke router when calling "goToDashboard" (direct call of method)', () => {
    component.goToDashboard();

    expect(routerStub.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should invoke router when calling "goToDashboard" (via button)', () => {
    let htmlElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.button-back');
    htmlElement.click();

    expect(routerStub.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('onInit', ()=> {
    let gameWithFields: Observable<GameWithFields> = of(GameWithFieldsFactory.aCompleteGameWithFields());
    spyOn(service, 'fetchNewGame').and.returnValue(gameWithFields);
    component.ngOnInit();
    fixture.detectChanges();

    let htmlElement: HTMLElement =  fixture.debugElement.nativeElement;

    expect(htmlElement.querySelector('#\\0031').textContent).toEqual("val1");
    expect(htmlElement.querySelector('#\\0035').textContent).toEqual("val5");
    expect(htmlElement.querySelector('#\\0039').textContent).toEqual("val9");

    expect(component.fields[0].lastModified).toBe("2018-10-02T10:02:03.123456");
  });

  it('onInit_Sort', ()=> {
    let gameWithFields: Observable<GameWithFields> = of(GameWithFieldsFactory.aCompleteGameWithFieldsWithUnorderedFields());
    spyOn(service, 'fetchNewGame').and.returnValue(gameWithFields);
    component.ngOnInit();
    fixture.detectChanges();

    let htmlElement: HTMLElement =  fixture.debugElement.nativeElement;
    let elements: NodeListOf<Element> = htmlElement.querySelectorAll('.button-field');

    expect(elements.item(0).textContent).toEqual('val5');
    expect(elements.item(1).textContent).toEqual('val4');
    expect(elements.item(2).textContent).toEqual('val6');
    expect(elements.item(3).textContent).toEqual('val3');
    expect(elements.item(4).textContent).toEqual('val9');
    expect(elements.item(5).textContent).toEqual('val2');
    expect(elements.item(6).textContent).toEqual('val1');
    expect(elements.item(7).textContent).toEqual('val7');
    expect(elements.item(8).textContent).toEqual('val8');
  });

  it('onInit_ServerReturnsError_DisplaysErrorMessage', ()=> {
    let errorField: HTMLElement = fixture.debugElement.nativeElement.querySelector('.error-field');
    spyOn(service, 'fetchNewGame').and.returnValue(new ErrorObservable("error message"));

    expect(errorField.textContent).toEqual("");

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.errorField).toEqual("error message");
    expect(errorField.textContent).toEqual("error message");
  });



  it('should update_Success', ()=> {
    initGameField();
    const updatedField: Field = FieldFactory.aCompleteFieldWithIdFieldIdAndValue(1, 1, "updated user");
    const fieldAi: Field = FieldFactory.aCompleteFieldWithIdFieldIdAndValue(2, 2, "updated ai");

    spyOn(service, 'updateField').and.returnValue(of(FieldStatusFactory.aSpielLaeuftNochFieldStatus(updatedField)));
    spyOn(service, 'getMoveFromAi').and.returnValue(of(FieldStatusFactory.aSpielLaeuftNochFieldStatus(fieldAi)));

    component.updateField(updatedField);
    
    expect(component.fields[0].value).toEqual(updatedField.value);
    expect(service.updateField).toHaveBeenCalledWith("http://localhost:8080/GamePortal/field/move/1", updatedField);
    expect(service.getMoveFromAi).toHaveBeenCalledWith("http://localhost:8080/GamePortal/field/ai/move/4");
    expect(component.fields[1].value).toEqual(fieldAi.value);
  });

  it('update_UserWins_ShouldNotCallGetMoveFromAi', ()=> {
    initGameField();
    const updatedField: Field = FieldFactory.aCompleteFieldWithIdFieldIdAndValue(1, 1, "updated user");

    spyOn(service, 'updateField').and.returnValue(of(FieldStatusFactory.aUserHatGewonnenWith(updatedField)));
    spyOn(service, 'getMoveFromAi');

    component.updateField(updatedField);
    
    expect(component.fields[0].value).toEqual(updatedField.value);
    expect(component.status).toEqual("User hat gewonnen");
    expect(service.updateField).toHaveBeenCalledWith("http://localhost:8080/GamePortal/field/move/1", updatedField);
    expect(service.getMoveFromAi).not.toHaveBeenCalled();
  });

  it('update_AiHasAlreadyWon_ServerReturnsError_DoesNotSetFieldFromUser', ()=> {
    initGameField();
    const updatedField: Field = FieldFactory.aCompleteFieldWithIdFieldIdAndValue(1, 1, "updated user");

    spyOn(service, 'updateField').and.returnValue(new ErrorObservable("invalid move"));
    spyOn(service, 'getMoveFromAi');

    component.updateField(updatedField);
    
    expect(component.fields[0].value).not.toEqual("updated user");
    expect(component.errorField).toEqual("invalid move");
    expect(service.getMoveFromAi).not.toHaveBeenCalled();
  });
    
  function initGameField() {
    let gameWithFields: Observable<GameWithFields> = of(GameWithFieldsFactory.aCompleteGameWithFields());
    spyOn(service, 'fetchNewGame').and.returnValue(gameWithFields);
    component.ngOnInit();
  }
  
});
