import { Component } from '@angular/core';
import { SportsService } from '../sports.service';
import { Sport } from '../models/Sport';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent  {
  sports : Array<Sport> = [];
  constructor(private sportService : SportsService) {
    this.getSports();
  }

  getSports() : void {
    this.sportService.getSports().subscribe(
      data => {
        console.log(data);
        this.sports = data
      }
    );
  }

}
