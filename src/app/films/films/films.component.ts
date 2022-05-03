import { Component, OnInit } from '@angular/core';
import { Film } from '../model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films$ = this.filmsService.films$;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {}
}
