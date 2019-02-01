import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs/index';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/internal/operators';

import { MessageService } from './message.service';
import { Post } from '../models/post';
import { Post_url } from '../api_endpoint';

const httpOptions1 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: "response" as "response"
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(Post_url)
      .pipe(
        tap(_ => this.log('fetched posts.')),
        catchError(this.handleError<Post[]>('get all posts'))
      );
  }

  getPost(id: string): Observable<Post> {
    const url = `${Post_url}/${id}`;
    return this.http.get<Post>(url)
      .pipe(
        tap(_ => this.log(`fetched post id=${id}`)),
        catchError(this.handleError<Post>('get post'))
      );
  }

  /** POST: add a new post to the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(Post_url, post, httpOptions1)
      .pipe(
        tap(resp => { this.log(`added post resp=${resp.body}`)} ),
        map(resp => resp.body),
        catchError(this.handleError<Post>('add Post'))
      );
  }

  /** DELETE: delete the post from the server */
  deletePost(post: Post | string): Observable<Post> {
    const id = typeof post === 'string' ? post: post._id.$oid;
    const url = `${Post_url}/${id}`;

    return this.http.delete<Post>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted post id=${id}`)),
        catchError(this.handleError<Post>('delete post'))
      );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(Post_url, post, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${post._id.$oid}`)),
      catchError(this.handleError<Post>('update post'))
    );
  }

  /*
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An client error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
         let errmsg: string = `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
        console.error(errmsg);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
*/
  private log(message:string) {
    this.messageService.add(message);
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
          'Something bad happened; please try again later.');
      }
      else {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      }
    };
  }

}
