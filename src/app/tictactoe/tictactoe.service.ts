import { Inject, Injectable, Injector } from "@angular/core";
import { AppUrlValuesInjectionToken } from "../url-constants/AppUrlValuesInjectionToken";
import { AppUrls } from "../url-constants/app.url.interface";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Field } from "./model/field";
import { Game } from "./model/game";
import { GameWithFieldsMapper } from "./model/game-with-fields-mapper";
import { GameFieldWrapper } from "./model/game-field-wrapper";
import { GameWithFields } from "./model/game-with-fields";
import { FieldStatus } from "./model/field-status";
import { Validations } from "../commons/validation/validations";
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { of } from "rxjs/observable/of";

@Injectable()
export class TicTacToeService {

    private static readonly ERROR_MESSAGE = "Response does not have HttpStatus 200";

    constructor(private http: HttpClient, private mapper: GameWithFieldsMapper) {
    }

    public fetchNewGame(url: string): Observable<GameWithFields> {
        console.log("fetch new game");
        return this.http.get(url, {observe: 'response'})
        .map((httpResponse: HttpResponse<GameFieldWrapper>) => this.mapper.asEntity(httpResponse.body))
        .pipe(catchError(this.handleError));
    }

    public getMoveFromAi(url: string): Observable<FieldStatus> {
        return this.http.get(url, {observe: 'response'})
            .map((httpResponse: HttpResponse<FieldStatus>) => httpResponse.body)
            .pipe(catchError(this.handleError)); 
    }    

    public updateField(url: string, field: Field): Observable<FieldStatus> {
        return this.http.put(url, field, {observe: 'response'})
            .map((httpResponse: HttpResponse<FieldStatus>) => httpResponse.body)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse): ErrorObservable {
        if (errorResponse.error.text === undefined) {
            return new ErrorObservable(TicTacToeService.ERROR_MESSAGE + ":" + errorResponse.error);
        }
        return new ErrorObservable(TicTacToeService.ERROR_MESSAGE + ":" + errorResponse.error.text);
    }

}