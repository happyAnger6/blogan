import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/internal/operators';
import { Category } from '../models/category';
import { Categories } from '../mock-datas';

import { MessageService } from './message.service';

import { Category_url } from '../api_endpoint';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(Category_url)
      .pipe(
        tap(_ => this.log('fetched categories.')),
        catchError(this.handleError('getAllCategories', []))
      );
  }

  getCategory(id: number): Observable<Category> {
    const url = `${Category_url}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Category>(`getHero id=${id}`))
    );
  }

  /** POST: add a new category to the server */
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(Category_url, category, httpOptions).pipe(
      tap((category: Category) => this.log(`added category w/ id=${category.id} name=${category.name}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  /** DELETE: delete the category from the server */
  deleteCategory(category: Category | string): Observable<Category> {
    const id = typeof category === 'string' ? category: category.id;
    const url = `${Category_url}/${id}`;

    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.put(Category_url, category, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${category.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message:string) {
    this.messageService.add(message);
  }
}
