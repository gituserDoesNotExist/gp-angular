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

describe("tictactoe service", () => {

    let service: TicTacToeService;
    let httpMock: HttpTestingController;

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

    it('should map the result correctly', () => {
        service.fetchNewGame('some-url').subscribe((res: GameWithFields) => {
            expect(res).toEqual(GameWithFieldsFactory.aCompleteGameWithFields());
        });

        

        let req: TestRequest = httpMock.expectOne({
            url: 'some-url',
            method: 'GET'
        });
        let response: HttpResponse<GameFieldWrapper> = newGameFromServer();
        req.flush(response.body, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
    });

    function newGameFromServer(): HttpResponse<GameFieldWrapper> {
        return new HttpResponse<GameFieldWrapper>({
            body: new GameFieldWrapper(GameFactory.aCompleteGame(), [FieldFactory.aCompleteField()]),
            headers: headerWithContentType('application/json'),
            status: 200,
            statusText: "OK",
            url: "some-url"
        });
    }
    
    function headerWithContentType(contentType: string): HttpHeaders {
        let mockHeaders: HttpHeaders = new HttpHeaders();
        return mockHeaders.append('Content-Type', contentType);
    }

})