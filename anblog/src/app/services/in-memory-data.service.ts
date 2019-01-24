import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const categories = [
      { id:'1', name: '根', father: '', type: 0, url: '', children: null, showFlag: 1},
      { id:'2', name: '编程语言', father: '1', type: 0, url: 'programs', children: ['3', '4'], showFlag: 1},
      { id:'3', name: 'Golang', father: '2', type: 0, url: 'programs/Golang', children: null, showFlag: 1},
      { id:'4', name: 'Python', father: '2', type: 0, url: 'programs/Python', children: null, showFlag: 1},
      { id:'5', name: '开源软件', father: '1', type: 0, url: 'programs/opensrc', children: null, showFlag: 1},
    ];
    return { categories };
  }

  genId(categories: Category[]): number{
    return 6;
  }
}
