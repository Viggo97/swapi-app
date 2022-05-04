import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  Observable,
  throwError,
} from 'rxjs';
import { URL } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Planet } from './planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private planetIdSubject = new BehaviorSubject<number>(0);
  planetId$ = this.planetIdSubject.asObservable();

  planet$ = this.planetId$.pipe(
    concatMap((id) => {
      if (id != 0) {
        return this.http.get<Planet>(`${URL}/planets/${id}`);
      } else {
        return EMPTY;
      }
    }),
    catchError(this.handleError)
  );
  constructor(private http: HttpClient) {}

  setPlanetId(id: number) {
    if (id != 0) {
      this.planetIdSubject.next(id);
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
