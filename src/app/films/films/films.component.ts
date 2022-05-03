import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getIdFromUrl } from '../../shared/utils/utils';

import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films$ = this.filmsService.films$;

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {}

  navigateToFilmDetails(url: string) {
    this.router.navigate([getIdFromUrl(url)]);
  }
}
