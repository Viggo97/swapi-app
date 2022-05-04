import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../planets.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit {
  planetId = 0;
  planet$ = this.planetsService.planet$;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.planetId = +params['id']));
    this.planetsService.setPlanetId(this.planetId);
  }

  back() {
    this.location.back();
  }
}
