import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css']
})
export class CategoryPostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  posts: Post[];
  total_nums: number = 0;
  category_id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit() {
    this.posts$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.category_id = params.get('id');
          return this.postService.getPostsByCategory(this.category_id);
      }
      )
    );
    this.posts$.subscribe(p => {
      this.total_nums = p.length;
      this.postService.getPostsPageByCategory(this.category_id, 1, 6)
        .subscribe(p => {
          this.posts = p;
        });
    });
  }

  onSelectPage(e) {
    this.postService.getPostsPageByCategory(this.category_id, e, 5)
      .subscribe(c => {
        this.posts = c;
      });
  }
}
