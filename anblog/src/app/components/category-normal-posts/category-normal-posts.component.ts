import {Component, Input, OnInit} from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs/Rx';
import { Post } from '../../models/post';
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-normal-posts',
  templateUrl: './category-normal-posts.component.html',
  styleUrls: ['./category-normal-posts.component.css']
})
export class CategoryNormalPostsComponent implements OnInit {
  @Input() category_id: string;
  posts$: Observable<Post[]>;
  category: Category;
  posts: Post[];
  total_nums: number = 0;
  constructor(
    private categoryService: CategoryService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.categoryService.getCategory(this.category_id)
      .subscribe(c => {
        this.category = c;
        this.postService.getPostsByCategory(this.category_id)
          .subscribe(p => {
            this.posts = p;
            this.total_nums = this.posts.length;
          })
      });
  }

  onSelectPage(e) {
    this.postService.getPostsPageByCategory(this.category_id, e, 5)
      .subscribe(c => {
        this.posts = c;
      });
  }

}
