import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  catchError,
  tap,
  concatMap,
  map,
  Observable,
  throwError,
  EMPTY,
  BehaviorSubject,
} from 'rxjs';

import { URL } from '../../environments/environment';
import { Film, FilmSchema } from './model';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films$ = this.http.get<FilmSchema>(`${URL}/films`).pipe(
    map((data) => data.results),
    catchError(this.handleError)
  );

  private filmIdSubject = new BehaviorSubject<number>(0);
  filmId$ = this.filmIdSubject.asObservable();

  film$ = this.filmId$.pipe(
    concatMap((id) =>
      id != 0 ? this.http.get<Film>(`${URL}/films/${id}`) : EMPTY
    ),
    catchError(this.handleError)
  );

  // characters$ = null;
  // planets$ = null;
  // starships$ = null;

  constructor(private http: HttpClient) {}

  setFilmId(id: number) {
    if (id != 0) {
      this.filmIdSubject.next(id);
    }
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
