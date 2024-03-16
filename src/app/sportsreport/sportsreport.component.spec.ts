import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsreportComponent } from './sportsreport.component';

describe('SportsreportComponent', () => {
  let component: SportsreportComponent;
  let fixture: ComponentFixture<SportsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
