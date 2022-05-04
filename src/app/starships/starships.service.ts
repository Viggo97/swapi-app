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
import { Starship } from './starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  private starshipIdSubject = new BehaviorSubject<number>(0);
  starshipId$ = this.starshipIdSubject.asObservable();

  starship$ = this.starshipId$.pipe(
    concatMap((id) => {
      if (id != 0) {
        return this.http.get<Starship>(`${URL}/starships/${id}`);
      } else {
        return EMPTY;
      }
    }),
    catchError(this.handleError)
  );
  constructor(private http: HttpClient) {}

  setStarshipId(id: number) {
    if (id != 0) {
      this.starshipIdSubject.next(id);
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
