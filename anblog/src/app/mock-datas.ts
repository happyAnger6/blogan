import { Category } from './models/category';

export const Categories: Category[] = [
  { _id:{ $oid: '1' }, name: '根', father: { $oid: '' }, type: 0, url: '', level: 0, children: null, showFlag: 1, subCategories: []},
  { _id:{ $oid: '2' }, name: '编程语言', father: { $oid: '1' }, type: 0, url: 'programs', level: 1, children: ['3', '4'], showFlag: 1, subCategories: []},
  { _id:{ $oid: '3' }, name: 'Golang', father: { $oid: '2' }, type: 0, url: 'programs/Golang', level: 1, children: null, showFlag: 1, subCategories: []},
  { _id:{ $oid: '4' }, name: 'Python', father: { $oid: '2' }, type: 0, url: 'programs/Python', level: 1, children: null, showFlag: 1, subCategories: []},
  { _id:{ $oid: '5' }, name: '开源软件', father: { $oid: '1' }, type: 0, url: 'programs/opensrc', level: 1, children: null, showFlag: 1, subCategories: []},
];
