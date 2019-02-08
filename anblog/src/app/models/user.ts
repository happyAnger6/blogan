import { ObjectId } from './objectid';

export class User{
  _id: ObjectId;
  name: string;
  realname: string;
  password: string;
  password_hash: string;
  email: string;
  type: number;
  gold: number;
  register_time: string;
  gender: number;
  school: string;
  company: string;
  birdthday: string;
  occupation: string;
}
