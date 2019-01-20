import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';

import { Category } from '../models/category';
import { Categories } from '../mock-datas';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private messageService: MessageService) { }

  getAllCategories(): Observable<Category[]> {
    this.messageService.add('all categories getting...');
    return of(Categories);
  }
}
