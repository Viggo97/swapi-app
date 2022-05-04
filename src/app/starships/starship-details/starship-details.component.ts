import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../starships.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
})
export class StarshipDetailsComponent implements OnInit {
  starshipId = 0;
  starship$ = this.starshipsService.starship$;

  constructor(
    private starshipsService: StarshipsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.starshipId = +params['id']));
    this.starshipsService.setStarshipId(this.starshipId);
  }

  back() {
    this.location.back();
  }
}
