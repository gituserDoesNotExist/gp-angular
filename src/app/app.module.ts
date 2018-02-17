import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppUrlValues } from './url-constants/AppUrlValues';
import { AppUrlValuesInjectionToken } from './url-constants/AppUrlValuesInjectionToken';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import {RouterModule, Routes} from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';

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
    SudokuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [
    DashboardService, 
    {provide: AppUrlValuesInjectionToken, useValue: AppUrlValues}],
  bootstrap: [AppComponent]
})
export class AppModule { }
