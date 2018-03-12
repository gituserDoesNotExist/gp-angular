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

  it('should fill the fields with the values from service', ()=> {
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

  it('should sort the fields by id after loading a new game', ()=> {
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

  it('should display the error message when error occurs while loading new game', ()=> {
    let errorField: HTMLElement = fixture.debugElement.nativeElement.querySelector('.error-field');
    spyOn(service, 'fetchNewGame').and.returnValue(new ErrorObservable("error message"));

    expect(errorField.textContent).toEqual("");

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.errorField).toEqual("error message");
    expect(errorField.textContent).toEqual("error message");
  });



  it('should update the fields array and display the new value', ()=> {
    const id: number = 3;
    const newValue: string = "new field value";
    const newTimestamp = "2019";
    const newField: Field = FieldFactory.aFieldWith(newTimestamp, newValue);

    let gameWithFields: Observable<GameWithFields> = of(GameWithFieldsFactory.aCompleteGameWithFieldsWithUnorderedFields());
    let fieldStatus: Observable<FieldStatus> = of(FieldStatusFactory.aSpielLaeuftNochFieldStatus(newField));
    spyOn(service, 'fetchNewGame').and.returnValue(gameWithFields);
    spyOn(service, 'updateField').and.returnValue(fieldStatus);
    component.ngOnInit();

    component.updateField(newField);
    
    expect(component.fields[0].lastModified).toEqual(newTimestamp);
  });

  it('should not update the fields array when the game is over', ()=> {
    let gameWithFields: GameWithFields = GameWithFieldsFactory.aCompleteGameWithFields();
    let fieldStatus: Observable<FieldStatus> = of(FieldStatusFactory.aAiHatGewonnenFieldStatus());
    spyOn(service, 'fetchNewGame').and.returnValue(of(gameWithFields));
    spyOn(service, 'updateField').and.returnValue(fieldStatus);
    component.ngOnInit();

    gameWithFields.fields.forEach((field: Field) => {
      expect(field.value).not.toEqual("value");
    });
  });


  it('should display the error message when an error occurs upon updating a field', () => {
    let gameWithFields: Observable<GameWithFields> = of(GameWithFieldsFactory.aCompleteGameWithFieldsWithUnorderedFields());
    spyOn(service, 'fetchNewGame').and.returnValue(gameWithFields);
    spyOn(service,"updateField").and.returnValue(new ErrorObservable("error upon updating"));
    let errorField: HTMLElement = fixture.debugElement.nativeElement.querySelector('.error-field');
    component.ngOnInit();
    
    expect(errorField.textContent).toEqual("");
    
    component.updateField(FieldFactory.aCompleteField());
    fixture.detectChanges()

    expect(component.errorField).toEqual("error upon updating");
    expect(errorField.textContent).toEqual("error upon updating");

  });

  it('should build the url correctly when updateFieldIfValidMove', () => {
    let gameWithFields: GameWithFields = GameWithFieldsFactory.aCompleteGameWithFields();
    gameWithFields.fields[4].id = 5;
    let fieldStatus: FieldStatus = FieldStatusFactory.aSpielLaeuftNochFieldStatus(FieldFactory.aCompleteField());
    let fieldStatusAfterUpdate: FieldStatus = new FieldStatus(FieldFactory.aFieldWithIdAndValue(5,"updated"),GameStatusFactory.aSpielLaeuftNoch());
    spyOn(service, 'fetchNewGame').and.returnValue(of(gameWithFields));
    spyOn(service, "checkIfValidMove").and.returnValue(of(fieldStatus));
    spyOn(service, "updateField").and.returnValue(of(fieldStatusAfterUpdate));
    component.ngOnInit();

    component.updateIfValidMove(1);
    
    expect(service.checkIfValidMove).toHaveBeenCalledWith('http://localhost:8080/GamePortal/field/move/valid', gameWithFields.fields[0]);
    expect(component.fields[0].value).toEqual("value");
    expect(component.fields[4].value).toEqual("updated");
  });

  it('should display an error message', () => {
    let gameWithFields: GameWithFields = GameWithFieldsFactory.aCompleteGameWithFields();
    spyOn(service, 'fetchNewGame').and.returnValue(of(gameWithFields));
    spyOn(service, "checkIfValidMove").and.returnValue(new ErrorObservable("error message"));
    component.ngOnInit();

    component.updateIfValidMove(1);
    fixture.detectChanges();

    expect(component.errorField).toEqual("error message");
    expect(fixture.debugElement.nativeElement.querySelector('.error-field').textContent).toEqual("error message");
  });

});
