import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {tap, delay, catchError} from 'rxjs/operators';

import { Login_url } from '../api_endpoint';
import { User } from '../models/user';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  user: User;
  constructor(
    private http: HttpClient,
    private msgService: MessageService
  ) { }

  login(user): Observable<User> {
    return this.http.post<User>(Login_url, user, httpOptions)
      .pipe(
        tap(r => { this.log(`login resp=r`);
          this.isLoggedIn = true;
          this.user = r;
        }),
        catchError(this.handleError<User>('login'))
      )
  }

  logout(): void{
    this.isLoggedIn = false;
  }

  private log(message:string) {
    this.msgService.add(message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if(error instanceof  HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An client error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          let errmsg: string = `${operation} failed: Server returned code ${error.status}, ` +
            `body was: ${error.error}`;
          console.error(errmsg);
          this.log(errmsg);
        }
        // return an observable with a user-facing error message
        return throwError(
          `error.${error.error}`);
      }
      else {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      }
    }
  }
}
