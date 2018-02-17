import { Inject, Injectable } from '@angular/core';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Description } from './description';


@Injectable()
export class DashboardService {

    constructor(@Inject(AppUrlValuesInjectionToken) private config: AppUrls, private httpClient: HttpClient) {
    }

    public getDescriptionForSudoku(): Observable<string> {
        return this.fetchDescription(this.config.descriptionSudoku);
    }

    public getDescriptionForTicTacToe(): Observable<string> {
        return this.fetchDescription(this.config.descriptionTictactoe);
    }

    private fetchDescription(url: string): Observable<string> {
        return this.httpClient.get(url).
        map(res => new Description(res['name'], res['numberOfPlayers'])).
        map((description: Description) => this.descriptionAsText(description));
    }

    private descriptionAsText(description: Description): string {
        return "This game is called " + description.getName() + " and the number of players is " + description.getNumberOfPlayers();
    }
}