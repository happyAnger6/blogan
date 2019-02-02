import { ObjectId } from './objectid';

export class Category {
  _id: ObjectId;
  name: string;
  father: ObjectId;
  type: number;
  url: string;
  level: number;
  children: Array<string>;
  showFlag: number;
}
