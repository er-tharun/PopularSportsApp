import { Component, inject } from '@angular/core';
import { Sport } from '../models/Sport';
import { SportsService } from '../sports.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrl: './cast-vote.component.css'
})
export class CastVoteComponent {
  sportList : Array<Sport> = [];

  castVoteFormGroup = new FormGroup(
    {
      selectSport : new FormControl('')
    }
  );

  constructor(private sportsService:SportsService,
  private router:Router) {
    this.getSports();
  }

  getSports() : void {
    this.sportsService.getSports().subscribe( data => {
      this.sportList = data;
    });
  }

  castVote() : void {
    console.log(this.castVoteFormGroup.value['selectSport']);
    this.sportsService.castVote(this.castVoteFormGroup.value['selectSport']).subscribe(
      data  => {
        alert('Voted successfully');
        this.router.navigate(['']);
      },
      err => {
        if(err.status='403') {
          alert('Admin should not cast a vote');
        }
      }
    );
  }
}
