import { Component } from '@angular/core';
import { Survey } from '../models/Survey';
import { SportsService } from '../sports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sportsreport',
  templateUrl: './sportsreport.component.html',
  styleUrl: './sportsreport.component.css'
})
export class SportsreportComponent {
  surveyList : Array<Survey> = [];

  constructor(private sportsService : SportsService,
  private router : Router) {
    this.getSurveys();
  }

  getSurveys() : void {
    this.sportsService.getSurveys().subscribe(
      data => {
        this.surveyList = data;
      },
      err => {
        alert('You dont have permission to access');
        this.router.navigate(['']);
      }
    );
  }
}
