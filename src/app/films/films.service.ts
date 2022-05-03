import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  catchError,
  of,
  concatMap,
  map,
  Observable,
  throwError,
  EMPTY,
  BehaviorSubject,
  from,
  mergeMap,
  forkJoin,
  scan,
} from 'rxjs';

import { URL } from '../../environments/environment';
import { Character, Film, FilmSchema, Planet, Starship } from './model';

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

  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.charactersSubject.asObservable();

  private planetsSubject = new BehaviorSubject<Planet[]>([]);
  planets$ = this.planetsSubject.asObservable();

  private starshipsSubject = new BehaviorSubject<Starship[]>([]);
  starships$ = this.starshipsSubject.asObservable();

  film$ = this.filmId$.pipe(
    concatMap((id) => {
      if (id != 0) {
        return this.http.get<Film>(`${URL}/films/${id}`).pipe(
          concatMap((film) => {
            this.getOtherData(film.characters, film.planets, film.starships);
            return of(film);
          })
        );
      } else {
        return EMPTY;
      }
    }),
    catchError(this.handleError)
  );

  getOtherData(characters: string[], planets: string[], starships: string[]) {
    const characters$ = from(characters).pipe(
      mergeMap((characterUrl) => this.http.get(characterUrl)),
      scan((acc: any, curr: any) => {
        acc.push(curr);
        return acc;
      }, [])
    );

    const planets$ = from(planets).pipe(
      mergeMap((planetUrl) => this.http.get(planetUrl)),
      scan((acc: any, curr: any) => {
        acc.push(curr);
        return acc;
      }, [])
    );

    const starships$ = from(starships).pipe(
      mergeMap((starshipUrl) => this.http.get(starshipUrl)),
      scan((acc: any, curr: any) => {
        acc.push(curr);
        return acc;
      }, [])
    );
    forkJoin([characters$, planets$, starships$]).subscribe(
      ([characters, planets, starships]) => {
        this.charactersSubject.next(characters);
        this.planetsSubject.next(planets);
        this.starshipsSubject.next(starships);
      }
    );
  }

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
