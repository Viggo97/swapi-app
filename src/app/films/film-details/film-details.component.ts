import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  filmId = 0;
  film$ = this.filmsService.film$;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.filmId = +params['id']));
    this.filmsService.setFilmId(this.filmId);
  }
}
