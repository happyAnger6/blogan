import { Category } from './models/category';

export const Categories: Category[] = [
  { id:'1', name: '根', parent: '', type: 0, url: '', children: null, flag: 1},
  { id:'2', name: '编程语言', parent: '1', type: 0, url: 'programs', children: ['3', '4'], flag: 1},
  { id:'3', name: 'Golang', parent: '2', type: 0, url: 'programs/Golang', children: null, flag: 1},
  { id:'4', name: 'Python', parent: '2', type: 0, url: 'programs/Python', children: null, flag: 1},
  { id:'5', name: '开源软件', parent: '1', type: 0, url: 'programs/opensrc', children: null, flag: 1},
];
