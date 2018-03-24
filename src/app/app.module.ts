import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppUrlValues } from './url-constants/AppUrlValues';
import { AppConstantsValues } from './url-constants/app.constants.values';
import { AppUrlValuesInjectionToken } from './url-constants/AppUrlValuesInjectionToken';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import {RouterModule, Routes} from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';
import { TicTacToeService } from './tictactoe/tictactoe.service';
import { GameWithFieldsMapper } from './tictactoe/model/game-with-fields-mapper';
import { AppConstantsInjectionToken } from './url-constants/AppConstantsInjectionToken';
import { DisableButtonDirective } from './directives/disable-button.directive';
import { HighlightButtonDirective } from './directives/highlight-button.directive';

const routes: Routes = [
  {path: 'tictactoe', component: TictactoeComponent },
  {path: 'sudoku', component: SudokuComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TictactoeComponent,
    SudokuComponent,
    DisableButtonDirective,
    HighlightButtonDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [
    {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues},
    {provide: AppConstantsInjectionToken, useValue: AppConstantsValues},
    TicTacToeService,
    DashboardService,
    GameWithFieldsMapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
