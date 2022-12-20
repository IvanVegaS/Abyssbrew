import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MagickAdvanced } from './magick-advanced';

@Injectable({ providedIn: 'root' })
export class MagickAdvancedService {

  private magicksAdvancedUrl = 'api/advancedMagicks';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getMagicksAdvanced(): Observable<MagickAdvanced[]> {
    return this.http.get<MagickAdvanced[]>(this.magicksAdvancedUrl)
      .pipe(
        tap((_) => console.log('fetched magicks-advanced')),
        catchError(this.handleError<MagickAdvanced[]>('getMagicksAdvanced', []))
      );
  }

  getMagicksAdvancedByType(type: string): Observable<MagickAdvanced[]> {
    if (!type.trim()) {
      return of([]);
    }
    return this.http.get<MagickAdvanced[]>(`${this.magicksAdvancedUrl}/?type=${type}`).pipe(
      tap(x => x.length ?
         console.log(`found magicks-advanced matching "${type}"`) :
         console.log(`no magicks-advanced matching "${type}"`)),
      catchError(this.handleError<MagickAdvanced[]>('searchMagicksAdvanced', []))
    );
  }

  getMagicksAdvancedByTypes(types: string[]): Observable<MagickAdvanced[]> {
    let inner: MagickAdvanced[] = [];
    
    types.forEach(t => {
      let mylist = new Observable<MagickAdvanced[]>;
      mylist = this.http.get<MagickAdvanced[]>(`${this.magicksAdvancedUrl}/?type=${t}`).pipe();
      mylist.forEach( e => e.forEach( i => inner.push(i)));
    });
    return of(inner);
  }

  searchMagicksAdvanced(name: string): Observable<MagickAdvanced[]> {
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get<MagickAdvanced[]>(`${this.magicksAdvancedUrl}/?name=${name}`).pipe(
      tap(x => x.length ?
         console.log(`found magicks-advanced matching "${name}"`) :
         console.log(`no magicks-advanced matching "${name}"`)),
      catchError(this.handleError<MagickAdvanced[]>('searchMagicksAdvanced', []))
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