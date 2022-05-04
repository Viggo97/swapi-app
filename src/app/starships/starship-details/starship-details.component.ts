import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../starships.service';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.starshipId = +params['id']));
    this.starshipsService.setStarshipId(this.starshipId);
  }
}
