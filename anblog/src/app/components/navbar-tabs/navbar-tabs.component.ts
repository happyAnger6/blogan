import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';
import {Post} from "../../models/post";

@Component({
  selector: 'app-navbar-tabs',
  templateUrl: './navbar-tabs.component.html',
  styleUrls: ['./navbar-tabs.component.css']
})
export class NavbarTabsComponent implements OnInit {
  @Input() categories: Category[];
  posts: Post[] = null;
  total_nums: number = 0;
  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  onSelectTopCategory(category_id: string) {
    this.postService.getPostsByCategory(category_id)
      .subscribe(p => {
        this.total_nums = p.length;
        this.postService.getPostsPageByCategory(category_id, 1, 6)
          .subscribe(p => {
            this.posts = p;
          });
      });
  }

}
