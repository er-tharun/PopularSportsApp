import { Component } from '@angular/core';
import { SportsService } from '../sports.service';
import { Survey } from '../models/Survey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadingsport',
  templateUrl: './leadingsport.component.html',
  styleUrl: './leadingsport.component.css'
})
export class LeadingsportComponent {
  leadingSport : Survey = new Survey();

  constructor(private sportService : SportsService,
  private router : Router) {
    this.getLeadingSport();
  }

  getLeadingSport() : void {
    this.sportService.getLeadingSport().subscribe(data => {
      this.leadingSport = data;
    },
    (err) => {
      alert('User dont have access');
      this.router.navigate(['']);
    }
    );
  }
}
