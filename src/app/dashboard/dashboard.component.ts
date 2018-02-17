import { Component, OnInit, Inject } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {Router} from '@angular/router';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public description: string = "";

  constructor(private dashboardService: DashboardService, private router: Router, 
              @Inject(AppUrlValuesInjectionToken) private config: AppUrls) { 

              }
  
  public createTicTacToeInfo(): void {
    this.dashboardService.getDescriptionForSudoku().subscribe(description => this.setDescriptionWithDelay(description));
  }

  public playTicTacToe(): void {
    this.navigate(this.config.playTicTacToe);
  }

  public createSudokuInfo(): void {
    this.dashboardService.getDescriptionForTicTacToe().subscribe(description => this.setDescriptionWithDelay(description));
  }

  public playSudoku(): void {
    console.log(this.config.playSudoku);
    this.navigate(this.config.playSudoku);
  }

  public clearInfo(): void {
    this.description = "";
  }

  private setDescriptionWithDelay(description: string): void {
    setTimeout(() => {
      this.description = description;
    }, 700);
  }

  private navigate(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
  }

}
