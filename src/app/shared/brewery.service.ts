import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Brewery } from './brewery';
@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  endpoint: string = `https://api.openbrewerydb.org/breweries/search?query=`;

  constructor(private http: HttpClient) { }

  searchBrewery(term: string): Observable<Brewery[]> {
    let url = `${this.endpoint}${term}`;
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Brewery[]>(url)
      .pipe(
        map(data => data.slice(0, 100)),
        catchError(e => { return of([])})
      )
  }

//    handleError<T>(operation = 'operation', result?: T) {
//   //  return (error: any): Observable<T> => {
//       return of(result as T);
//  //   };
 // }
}
