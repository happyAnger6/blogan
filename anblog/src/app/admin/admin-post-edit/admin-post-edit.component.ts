import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ObjectId } from '../../models/objectid';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.css']
})
export class AdminPostEditComponent implements OnInit {
  postSchema = require('./edit_post_form.json');
  @Input() post: Post = null;
  @Output() editFlag = new EventEmitter<number>();
  categories: Category[];
  curtime: any;
  constructor(private postService: PostService,
              private categoryService: CategoryService) { }

  updateSchema() {
    let postArray: any[] = [];
    for (let c of this.categories){
      postArray.push({
        "description": c.name,
        "enum": [
          c.name
        ]
      });
    };

    if (this.post) {
      this.postSchema.properties.category.oneOf = postArray;
      this.postSchema.properties.title.value = this.post.title;
    }
  }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => {
        this.categories = c;
        this.updateSchema();
      });
  }

  findCategoryIdByName(name: string): ObjectId {
    for (let c of this.categories) {
      if (c.name === name) {
        return c._id;
      }
    }
  }

  val2post(value:any, post: Post) {
    post.title = value.title;
    post.type = this.iType2ModelType(value.type);
    post.showFlag = this.iFlag2ModelFlag(value.showFlag);
    post.category = this.findCategoryIdByName(value.category);
    post.author = "admin";
    post.chapter = value.chapter;
    post.section = value.section;
  }

  iType2ModelType(t: string): number{
    if(t == "original")
      return 0;
    return 1;
  }

  iFlag2ModelFlag(t: string): number {
    if (t == "show")
      return 1;
    return 0;
  }

  addPost(val) {
    this.val2post(val, this.post);
    this.postService.addPost(this.post)
      .subscribe();
    this.editFlag.emit(1);
  }

  onCancel(val) {
    this.editFlag.emit(0);
  }

}
