import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs/index';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/internal/operators';

import { MessageService } from './message.service';

import { Comment_url } from '../api_endpoint';
import { Comment } from '../models/comment';
import { ObjectId } from '../models/objectid';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  /** POST: add a new comment to post */
  addComment2Post(post_id: string, comment: Comment): Observable<Comment> {
    const url = `${Comment_url}/${post_id}/comment`;
    return this.http.post<Comment>(url, comment, httpOptions)
      .pipe(
        tap(resp => {
          this.log(`added comment resp=${resp}`)
        }),
        catchError(this.handleError<Comment>('add Post'))
      );
  }

  getAllCommentsByPost(post_id: string): Observable<Comment[]> {
    const url = `${Comment_url}/${post_id}/comment`;
    return this.http.get<Comment[]>(url)
      .pipe(
        tap(_ => this.log('fetched comments.')),
        catchError(this.handleError<Comment[]>('get all comments by post_id'))
      );
  }

  private log(message: string) {
    this.messageService.info(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error instanceof HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An client error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          let errmsg: string = `${operation} failed: Server returned code ${error.status}, ` +
            `body was: ${error.error}`;
          console.error(errmsg);
          this.messageService.error(errmsg);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
      else {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.messageService.error(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      }
    };

  }

}
