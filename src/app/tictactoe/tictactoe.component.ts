import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';
import { TicTacToeService } from './tictactoe.service';
import { Response } from '@angular/http';
import { Field } from './model/field';
import { GameWithFields } from './model/game-with-fields';
import { GameWithFieldsMapper } from './model/game-with-fields-mapper';
import * as R from 'ramda';
import { Validations } from '../commons/validation/validations';
import { ListUtility } from '../commons/list-util/list.utility';
import { FieldStatus } from './model/field-status';
import { GameStatus } from './model/game-status';
import { AppConstantsInjectionToken } from '../url-constants/AppConstantsInjectionToken';
import { AppConstants } from '../url-constants/app.constants';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  private static readonly ID_GAME_IN_PROGRESS: number = 5;
  private static readonly FIELD_NOT_FOUND: string = "Das Feld konnte nicht gefunden werden";

  public status: string = "";
  public errorField: string = "";
  public fields: Array<Field>;
  public gameOver: boolean = false;

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls, 
  private service: TicTacToeService, @Inject(AppConstantsInjectionToken) private constants: AppConstants) { }
  
  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }

  public getMoveFromAi(gameId: number) {
    this.service.getMoveFromAi(this.config.getMoveFromAi.replace("__GAMEID__", gameId.toString())).subscribe(
      (res: FieldStatus) => {
        this.setFieldAndStatus(res);
        this.gameOverIfNecessary(res.status);
      },
      (error) => this.errorField = error
    );
  }

  public updateField(field: Field) {
    console.log("update field with fieldId " + field.fieldId);
    this.service.updateField(this.config.updateField.replace("__ID__", field.id.toString()), field).subscribe(
      (res: FieldStatus) => {
        this.setFieldAndStatus(res);
        this.gameOverIfNecessary(res.status);
        if (res.status.id === this.constants.gameInProgress) {
          this.getMoveFromAi(field.gameId);
        }
      },
      (error) => this.errorField = error
    );
  }

  private setFieldAndStatus(fieldStatus: FieldStatus): void {
    this.setNewField(fieldStatus.field);
    this.status = fieldStatus.status.text;

  }

  public newGame(): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.service.fetchNewGame(this.config.newgame).subscribe(
      (res: GameWithFields) => {
        this.fields = this.sortFields(res.fields);
      },
      (error) => this.errorField = error
    );
  }

  private createUrl(base: string, id: number): string {
    return base + "/" + id;
  }

  private sortFields(fields: Array<Field>): Array<Field> {
     return R.sort((field1: Field, field2: Field) => (field1.fieldId - field2.fieldId), fields);
  }

  private findField(id: number): Field {
    let results: Field[] = R.filter((field: Field) => field.id == id, this.fields);
    Validations.checkNot(ListUtility.isEmpty(results), TictactoeComponent.FIELD_NOT_FOUND);
    return results[0];
  }

  private setNewField(field: Field): void {
    let oldField = this.findField(field.id);
    let index: number = ListUtility.getIndexOf(oldField, this.fields);
    this.fields[index] = field;
  }

  private gameOverIfNecessary(status: GameStatus): void {
    if (status.id !== this.constants.gameInProgress) {
      this.gameOver = true;
    }
  }


}
