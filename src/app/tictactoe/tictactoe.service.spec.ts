import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController,TestRequest } from '@angular/common/http/testing';
import { TicTacToeService } from "./tictactoe.service";
import { Field } from "./model/field";
import { Game } from "./model/game";
import { ResponseOptions, Headers } from '@angular/http';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { GameWithFields } from './model/game-with-fields';
import { Status } from './model/status';
import { GameFieldWrapper } from './model/game-field-wrapper';
import { GameWithFieldsMapper } from './model/game-with-fields-mapper';
import { GameFactory } from './test.factory/game-factory';
import { FieldFactory } from './test.factory/field-factory';
import { GameWithFieldsFactory } from './test.factory/game-with-fields-factory';
import { FieldStatusFactory } from './test.factory/field-status-factory';
import { FieldStatus } from './model/field-status';
import { HttpResponseFactory } from './test.factory/http-factory';

describe("tictactoe service", () => {

    let service: TicTacToeService;
    let httpMock: HttpTestingController;

    const TIMESTAMP: string = "2000-10-1T10:02:03.123456";
    const GAME_ID: number = 4;
    const FIELD_ID: number = 8;
    const ID: number = 1;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [TicTacToeService, GameWithFieldsMapper]
        });
        service = TestBed.get(TicTacToeService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });

    it('load a new game and map the result correctly', () => {
        service.fetchNewGame('some-url').subscribe((res: GameWithFields) => {
            expect(res).toEqual(GameWithFieldsFactory.aGameWithFieldsWithOneField());
        });

        let req: TestRequest = httpMock.expectOne({url: 'some-url',method: 'GET'});
        let response: HttpResponse<GameFieldWrapper> = 
                    aSuccessfulResponse(new GameFieldWrapper(GameFactory.aCompleteGame(), [FieldFactory.aCompleteField()]), "some-url");
        req.flush(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
    });

    it('report an error when backend returns bad request on loading new game', () => {
        service.fetchNewGame('some-url').subscribe(
            res => console.log(res),
            error => expect(error).toEqual("Response does not have HttpStatus 200")
        );

        let req: TestRequest = httpMock.expectOne({url: 'some-url',method: 'GET'});
        let response: HttpResponse<GameFieldWrapper> = 
                    anErrorResponse(new GameFieldWrapper(GameFactory.aCompleteGame(), [FieldFactory.aCompleteField()]), "some-url");
        req.flush(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
    });



    it('call the api endpoint when updating the given field', () => {
        let fieldToUpdate: Field = new Field(ID,"2000-10-1T10:02:03.123456", GAME_ID, FIELD_ID, "old-value");

        service.updateField('url-update', fieldToUpdate).subscribe((res: FieldStatus) => {
            expect(res.getField().value).toEqual("value");
        });

        let req: TestRequest = httpMock.expectOne({url: 'url-update',method: 'PUT'});
        let response: HttpResponse<FieldStatus> = aSuccessfulResponse(FieldStatusFactory.aAiHatGewonnenFieldStatus(),"url-update");
        req.flush(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
    });

    it('call the api endpoint when updating the given field', () => {
        let fieldToUpdate: Field = new Field(ID,"2000-10-1T10:02:03.123456", GAME_ID, FIELD_ID, "old-value");

        service.updateField('url-update', fieldToUpdate).subscribe(
            (res: FieldStatus) => console.log(res),
            (error) => {
                expect(error).toEqual("Response does not have HttpStatus 200");
            }
        );

        let req: TestRequest = httpMock.expectOne({url: 'url-update',method: 'PUT'});
        let response: HttpResponse<FieldStatus> = anErrorResponse(FieldStatusFactory.aAiHatGewonnenFieldStatus(),"url-update");
        req.flush(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
    });

    function aSuccessfulResponse<T>(body: T, url: string): HttpResponse<T> {
        return HttpResponseFactory.aHttpResponseWith(body,"application/json",200,"OK",url);
    }

    function anErrorResponse<T>(body: T, url: string): HttpResponse<T> {
        return HttpResponseFactory.aHttpResponseWith(body,"application/json",400,"OK",url);
    }
})