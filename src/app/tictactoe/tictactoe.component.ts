import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';
import { TicTacToeService } from './tictactoe.service';
import { Response } from '@angular/http';
import { Field } from './model/field';
import { GameWithFields } from './model/game-with-fields';
import { GameWithFieldsMapper } from './model/game-with-fields-mapper';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls, private service: TicTacToeService) { }

  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }

  ngOnInit() {
    this.service.fetchNewGame(this.config.newgame).subscribe((res: GameWithFields) => {
      console.log(res);
    });
  }

}
