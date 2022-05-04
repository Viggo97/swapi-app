import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  planetId = 0;
  planet$ = this.planetsService.planet$;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.planetId = +params['id']));
    this.planetsService.setPlanetId(this.planetId);
  }
}
