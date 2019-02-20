import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Category } from "../../models/category";
import { Post } from "../../models/post";

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-category-chapter-posts',
  templateUrl: './category-chapter-posts.component.html',
  styleUrls: ['./category-chapter-posts.component.css']
})
export class CategoryChapterPostsComponent implements OnInit, OnChanges {
  @Input() category: Category;
  posts: Post[] = [];
  expandFlags: number[] = [];
  curChapter: number;
  curSection: number;
  curPost: Post;
  constructor(
    private postService: PostService
  ) { }

  initData() {
    this.expandFlags = [];
    this.curChapter = -1;
    this.curSection = -1;
    this.curPost = null;
    this.posts = [];
    this.postService.getPostsByCategory(this.category._id.$oid)
      .subscribe(p => {
        this.posts = p;
      });
  }

  ngOnInit() {
    this.postService.getPostsByCategory(this.category._id.$oid)
      .subscribe(p => {
        this.posts = p;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === "category") {
        this.category = changes[propName].currentValue;
      }
    }
    this.initData();
  }

  onExpand(c: number) {
    const index = this.expandFlags.indexOf(c);
    console.log('expand', index, c);
    if (-1 === index) {
      this.expandFlags.push(c);
    } else {
      this.expandFlags.splice(index, 1);
    }
  }

  isExpanded(c: number): boolean {
    if (this.expandFlags.indexOf(c) == -1) {
      return false;
    }
    return true;
  }

  getPostsByLevel(level: number): Post[]{
    let posts = [];
    for (let p of this.posts) {
      if (p.section === level) {
        posts.push(p);
      }
    }
    return posts;
  }

  getCurPost(c: number, s: number): Post{
    for (let p of this.posts) {
      if (p.section === s && p.chapter === c) {
        this.curPost = p;
      }
    }
    return this.curPost;
  }

  getPostsByChapter(chapter: number): Post[] {
    let posts = [];
    for (let p of this.posts) {
      if (p.chapter === chapter && p.section !== 0) {
        posts.push(p);
      }
    }
    return posts;
  }

  onSelectChapter(c: number) {
    this.curChapter = c;
    this.onExpand(c);
    this.getCurPost(c, 0);
  }

  onSelectSection(c:number, s:number) {
    this.curChapter = c;
    this.curSection = s;
    this.getCurPost(c, s);
  }

}
