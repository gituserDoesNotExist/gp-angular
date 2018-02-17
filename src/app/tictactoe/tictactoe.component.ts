import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppUrlValuesInjectionToken } from '../url-constants/AppUrlValuesInjectionToken';
import { AppUrls } from '../url-constants/app.url.interface';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor(private router: Router, @Inject(AppUrlValuesInjectionToken) private config: AppUrls) { }

  public goToDashboard() {
    this.router.navigate([this.config.dashboard]);
  }


  ngOnInit() {
  }

}
