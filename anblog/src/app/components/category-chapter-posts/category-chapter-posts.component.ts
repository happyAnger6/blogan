import { Component, Input, OnInit } from '@angular/core';
import { Category } from "../../models/category";
import { Post } from "../../models/post";

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-category-chapter-posts',
  templateUrl: './category-chapter-posts.component.html',
  styleUrls: ['./category-chapter-posts.component.css']
})
export class CategoryChapterPostsComponent implements OnInit {
  @Input() category: Category;
  posts: Post[] = [];
  c_s_posts: Post[][];
  expandFlags: number[] = [];
  curChapter: number;
  curSection: number;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPostsByCategory(this.category._id.$oid)
      .subscribe(p => {
        this.posts = p;
      })
  }

  onExpand(c: number) {
    let index = this.expandFlags.indexOf(c)
    if(-1 == index) {
      this.expandFlags.push(c)
    } else {
      this.expandFlags.splice(index, 1)
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
      if (p.section == level) {
        posts.push(p)
      }
    }
    return posts;
  }

  getPostsByChapter(chapter: number): Post[] {
    console.log('ccccccc', chapter);
    let posts = [];
    for (let p of this.posts) {
      console.log('ppp', p.chapter);
      if (p.chaper == chapter) {
        console.log('push', p);
        posts.push(p)
      }
    }
    console.log('ccccccc', posts, this.posts);
    return posts;
  }

}
