import { TestBed } from '@angular/core/testing';

import { PlantesService } from './planets.service';

describe('PlantesService', () => {
  let service: PlantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});