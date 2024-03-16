import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingsportComponent } from './leadingsport.component';

describe('LeadingsportComponent', () => {
  let component: LeadingsportComponent;
  let fixture: ComponentFixture<LeadingsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadingsportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadingsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
