import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Magick } from './magick';

@Injectable({ providedIn: 'root' })
export class MagickService {

  private magicksUrl = 'api/magicks';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getMagicks(): Observable<Magick[]> {
    return this.http.get<Magick[]>(this.magicksUrl)
      .pipe(
        tap((_) => console.log('fetched magicks')),
        catchError(this.handleError<Magick[]>('getMagicks', []))
      );
  }

  getMagicksByType(type: string): Observable<Magick[]> {
    if (!type.trim()) {
      return of([]);
    }
    return this.http.get<Magick[]>(`${this.magicksUrl}/?type=${type}`).pipe(
      tap(x => x.length ?
         console.log(`found magicks matching "${type}"`) :
         console.log(`no magicks matching "${type}"`)),
      catchError(this.handleError<Magick[]>('searchMagicks', []))
    );
  }

  searchMagicks(name: string): Observable<Magick[]> {
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get<Magick[]>(`${this.magicksUrl}/?name=${name}`).pipe(
      tap(x => x.length ?
         console.log(`found magicks matching "${name}"`) :
         console.log(`no magicks matching "${name}"`)),
      catchError(this.handleError<Magick[]>('searchMagicks', []))
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