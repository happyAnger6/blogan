import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs/index';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BehaviorSubject, Subject } from "rxjs/Rx";
import { catchError, map, tap } from 'rxjs/internal/operators';
import { Category } from '../models/category';

import { MessageService } from './message.service';

import { Category_url } from '../api_endpoint';
import { SubCategory_url } from '../api_endpoint';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  allCategories: Category[] = [];
  allCategories$  = new BehaviorSubject<Category[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  public addAndPublishCategory(category: Category) {
    this.allCategories.push(category);
    this.publishAllCategories();
  }

  public delAndPublishCategory(category: Category) {
    this.allCategories = this.allCategories.filter(x => x._id.$oid != category._id.$oid);
    this.publishAllCategories();
  }

  private publishAllCategories() {
    this.allCategories$.next(this.allCategories);
  }

  getAllSubCategories(categories: Category[], father: Category): Observable<Category[]> {
    let cates: Category[] = [];
    for (let c of categories) {
      if (c.name == 'root')
        continue;
      if (c.father.$oid == father._id.$oid) {
        cates.push(c)
      }
    }
    return of(cates);
  }

  getAllCategoriesByLevel(level: number): Observable<Category[]> {
    let cates: Category[] = [];
    for (let c of this.allCategories) {
      if (c.name == 'root')
        continue;
      if (c.level == level) {
        cates.push(c)
      }
    }
    return of(cates);
  }

  getAllCategories(): Observable<Category[]> {
    if(this.allCategories.length == 0 ){
      this.http.get<Category[]>(Category_url)
        .pipe(
          tap(_ => this.log('fetched all categories.')),
          catchError(this.handleError<Category[]>('get all categories'))
        ).subscribe(c => {
          this.allCategories = c;
          this.publishAllCategories();
      });
    }
    return this.allCategories$;
  }

  getSubCategory(id: string): Observable<Category[]> {
    const url = `${SubCategory_url}/${id}`;
    return this.http.get<Category[]>(url)
      .pipe(
        tap(_ => this.log(`fetched subcategory id=${id}`)),
        catchError(this.handleError<Category[]>('get category'))
      );
  }

  getCategory(id: string): Observable<Category> {
    const url = `${Category_url}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
      tap(_ => this.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>('get category'))
    );
  }

  /** POST: add a new category to the server */
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(Category_url, category, httpOptions)
      .pipe(
      tap(resp => { this.log(`added category resp=${resp}`)} ),
      catchError(this.handleError<Category>('add Category'))
    );
  }

  /** DELETE: delete the category from the server */
  deleteCategory(category: Category | string): Observable<Category> {
    const id = typeof category === 'string' ? category: category._id.$oid;
    const url = `${Category_url}/${id}`;

    return this.http.delete<Category>(url, httpOptions)
      .pipe(
      tap(_ => this.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('delete category'))
    );
  }

  updateCategory(category: Category): Observable<Category> {
    const id = typeof category === 'string' ? category: category._id.$oid;
    const url = `${Category_url}/${id}`;
    return this.http.put<Category>(url, category, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${category._id.$oid}`)),
      catchError(this.handleError<Category>('update category'))
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
    this.messageService.info(message);
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
