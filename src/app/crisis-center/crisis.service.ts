import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  private crisesUrl = 'api/crises'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  /** GET crises from the server */
  getCrises(): Observable<Crisis[]> {
    return this.http.get<Crisis[]>(this.crisesUrl).pipe(
      tap(() => this.log('fetched crises')),
      catchError(this.handleError<Crisis[]>('getCrises', [])),
    );
  }

  /** GET crisis by id. Return `undefined` when id not found */
  getCrisisNo404(id: number): Observable<Crisis> {
    const url = `${this.crisesUrl}/?id=${id}`;
    return this.http.get<Crisis[]>(url).pipe(
      map((crises) => crises[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} crisis id=${id}`);
      }),
      catchError(this.handleError<Crisis>(`getCrisis id=${id}`)),
    );
  }

  /** GET crisis by id. Will 404 if id not found */
  getCrisis(id: number): Observable<Crisis> {
    const url = `${this.crisesUrl}/${id}`;

    return this.http.get<Crisis>(url).pipe(
      tap(() => this.log(`fetched crisis id=${id}`)),
      catchError(this.handleError<Crisis>(`getCrisis id=${id}`)),
    );
  }

  /* GET crises whose name contains search term */
  searchCrises(term: string): Observable<Crisis[]> {
    if (!term.trim()) {
      // if not search term, return empty crisis array.
      return of([]);
    }
    return this.http.get<Crisis[]>(`${this.crisesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found crises matching "${term}"`)
          : this.log(`no crises matching "${term}"`),
      ),
      catchError(this.handleError<Crisis[]>('searchCrises', [])),
    );
  }

  //////// Save methods //////////

  /** POST: add a new crisis to the server */
  addCrisis(crisis: Crisis): Observable<Crisis> {
    return this.http
      .post<Crisis>(this.crisesUrl, crisis, this.httpOptions)
      .pipe(
        tap((newCrisis: Crisis) =>
          this.log(`added crisis w/ id=${newCrisis.id}`),
        ),
        catchError(this.handleError<Crisis>('addCrisis')),
      );
  }

  /** DELETE: delete the crisis from the server */
  deleteCrisis(id: number): Observable<Crisis> {
    const url = `${this.crisesUrl}/${id}`;

    return this.http.delete<Crisis>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted crisis id=${id}`)),
      catchError(this.handleError<Crisis>('deleteCrisis')),
    );
  }

  /** PUT: update the crisis on the server */
  updateCrisis(crisis: Crisis): Observable<unknown> {
    return this.http.put(this.crisesUrl, crisis, this.httpOptions).pipe(
      tap(() => this.log(`updated crisis id=${crisis.id}`)),
      catchError(this.handleError<never>('updateCrisis')),
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
    return (error: unknown): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // assume error has message
      const errorForDisplay = error as { message: string };
      this.log(`${operation} failed: ${errorForDisplay.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CrisisService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CrisisService: ${message}`);
  }
}
