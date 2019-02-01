import { ObjectId } from './objectid';

export class Post{
  _id: ObjectId;
  title: string;
  content: string;
  category: string;
  chaper: number;
  section: number;
  author: string;
  publish_data: any;
  tags: Array<string>;
  comments: Array<string>;
  type: number;
  showFlag: number;
}
