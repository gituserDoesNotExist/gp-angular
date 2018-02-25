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

@Injectable()
export class TicTacToeService {

    private readonly HTTP_STATUS_OK = 200;

    constructor(private http: HttpClient, private mapper: GameWithFieldsMapper) {
    }

    public fetchNewGame(url: string): Observable<GameWithFields> {
        return this.http.get(url, {observe: 'response'}).map((httpResponse: HttpResponse<GameFieldWrapper>) => {
            if(httpResponse.status !== this.HTTP_STATUS_OK){
                throw new Error("response does not have HttpStatus 200 but " + httpResponse.status + ". " + httpResponse.statusText);
            };
            let res: GameFieldWrapper = httpResponse.body;
            return this.mapper.asEntity(res);
        });
    }

}