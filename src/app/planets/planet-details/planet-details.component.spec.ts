import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailComponent } from './planet-details.component';

describe('PlanetDetailComponent', () => {
  let component: PlanetDetailComponent;
  let fixture: ComponentFixture<PlanetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
