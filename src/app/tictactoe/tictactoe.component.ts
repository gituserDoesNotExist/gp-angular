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

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls, private service: TicTacToeService) { }
  
  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }

  public updateField(id: number, value: string) {
    var field: Field = this.findField(id);
    console.log("update field with fieldId " + field.fieldId);
    this.service.updateField(this.createUrl(this.config.updateField,id), field).subscribe(
      (res: FieldStatus) => {
        field.value = value;
        let gameStatus: GameStatus = res.getGameStatus();

        if (gameStatus.getId() === TictactoeComponent.ID_GAME_IN_PROGRESS) {
          this.setNewField(res.getField());
        }
        this.status = gameStatus.getText();
      },
      (error) => this.errorField = error
    );
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


}
