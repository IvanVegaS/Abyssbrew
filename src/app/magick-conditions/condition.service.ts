import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Condition } from './magick-conditions';

@Injectable({ providedIn: 'root' })
export class ConditionService {

  private conditionsUrl = 'api/conditions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getConditions(): Observable<Condition[]> {
    return this.http.get<Condition[]>(this.conditionsUrl)
      .pipe(
        tap((_) => console.log('fetched conditions')),
        catchError(this.handleError<Condition[]>('getConditions', []))
      );
  }

  getCondition(id: number): Observable<Condition> {
    const url = `${this.conditionsUrl}/${id}`;
    return this.http.get<Condition>(url).pipe(
      tap((_) => console.log(`fetched condition id=${id}`)),
      catchError(this.handleError<Condition>(`getCondition id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}