import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { Category } from '../../models/category';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import {ObjectId} from "../../models/objectid";

@Component({
  selector: 'app-admin-post-new',
  templateUrl: './admin-post-new.component.html',
  styleUrls: ['./admin-post-new.component.css']
})
export class AdminPostNewComponent implements OnInit {
  postSchema = require('./new_post_form.json');
  postContent: string;
  newPost: Post = new Post();
  categories: Category[];

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
      })
    };
    this.postSchema.properties.category.oneOf = postArray;
  }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => {
        this.categories = c;
        this.updateSchema();
      });
  }

  findCategoryIdByName(name: string): string {
    for (let c of this.categories) {
      if (c.name == name) {
        return c._id.$oid;
      }
    }
  }

  val2post(value:any, content:any, post: Post) {
    post.title = value.title;
    post.type = this.iType2ModelType(value.type);
    post.content = content;
    post.showFlag = this.iFlag2ModelFlag(value.showFlag);
    post.category = this.findCategoryIdByName(value.category);
    post.author = "admin";
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

  addPost(val, content) {
    this.val2post(val, content, this.newPost);
    this.postService.addPost(this.newPost)
      .subscribe();
  }
}
