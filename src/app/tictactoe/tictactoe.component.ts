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


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  public fields: Array<Field>;

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls, private service: TicTacToeService) { }
  
  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }

  public updateField(id: number, fieldId: number, value: string) {
    console.log(id + " " + fieldId + " " +  value);
  }

  ngOnInit() {
    this.service.fetchNewGame(this.config.newgame).subscribe((res: GameWithFields) => {
      this.fields = this.sortFields(res.fields);
      console.log(this.fields);
    });
  }

  private sortFields(fields: Array<Field>): Array<Field> {
     return R.sort((field1: Field, field2: Field) => (field1.fieldId - field2.fieldId), fields);
  }

}
