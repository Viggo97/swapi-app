import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getIdFromUrl } from '../../shared/utils/utils';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  filmId = 0;
  film$ = this.filmsService.film$;
  characters$ = this.filmsService.characters$;
  planets$ = this.filmsService.planets$;
  starships$ = this.filmsService.starships$;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.filmId = +params['id']));
    this.filmsService.setFilmId(this.filmId);
  }

  navigateToCharacterDetails(url: string) {
    this.router.navigate(['characters', getIdFromUrl(url)]);
  }

  navigateToPlanetDetails(url: string) {
    this.router.navigate(['planets', getIdFromUrl(url)]);
  }

  navigateToStarshipDetails(url: string) {
    this.router.navigate(['starships', getIdFromUrl(url)]);
  }
}
