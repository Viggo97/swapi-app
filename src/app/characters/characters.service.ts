import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { URL } from '../../environments/environment';
import { Character } from './character.model';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  Observable,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characterIdSubject = new BehaviorSubject<number>(0);
  characterId$ = this.characterIdSubject.asObservable();

  character$ = this.characterId$.pipe(
    concatMap((id) => {
      if (id != 0) {
        return this.http.get<Character>(`${URL}/people/${id}`);
      } else {
        return EMPTY;
      }
    }),
    catchError(this.handleError)
  );
  constructor(private http: HttpClient) {}

  setCharacterId(id: number) {
    if (id != 0) {
      this.characterIdSubject.next(id);
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
