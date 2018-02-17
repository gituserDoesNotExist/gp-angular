import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls) { }

  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }


  ngOnInit() {
  }

}
