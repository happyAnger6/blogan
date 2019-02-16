import { ObjectId } from './objectid';

class SubCategory {
  _id: ObjectId;
  name: string;
}

export class Category {
  _id: ObjectId;
  name: string;
  father: ObjectId;
  type: number;
  url: string;
  level: number;
  children: Array<string>;
  showFlag: number;
  subCategories: Array<Category>;
}

