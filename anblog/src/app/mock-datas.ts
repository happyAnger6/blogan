import { Category } from './models/category';

export const Categories: Category[] = [
  { id:'1', name: '根', father: '', type: 0, url: '', level: 0, children: null, flag: 1},
  { id:'2', name: '编程语言', father: '1', type: 0, url: 'programs', level: 1, children: ['3', '4'], flag: 1},
  { id:'3', name: 'Golang', father: '2', type: 0, url: 'programs/Golang', level: 1, children: null, flag: 1},
  { id:'4', name: 'Python', father: '2', type: 0, url: 'programs/Python', level: 1, children: null, flag: 1},
  { id:'5', name: '开源软件', father: '1', type: 0, url: 'programs/opensrc', level: 1, children: null, flag: 1},
];
