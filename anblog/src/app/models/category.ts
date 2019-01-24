export class Category {
  id: string;
  name: string;
  father: string;
  type: number;
  url: string;
  level: number;
  children: Array<string>;
  showFlag: number;
}
