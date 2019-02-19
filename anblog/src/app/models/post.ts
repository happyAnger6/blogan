import { ObjectId } from './objectid';
import { Comment } from './comment';

export class Post{
  _id: ObjectId;
  title: string;
  content: string;
  category: ObjectId;
  chaper: number;
  section: number;
  author: string;
  publish_data: any;
  tags: Array<string>;
  comments: Array<Comment>;
  type: number;
  showFlag: number;
}

