import { Component, OnInit } from '@angular/core';

import { Post} from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[];
  total_nums: number = 0;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(c => {
        this.total_nums = c.length;
      });

    this.postService.getPostsByPage(1, 5)
      .subscribe(c => {
        this.posts = c
      });
  }

  onSelectPage(e) {
    this.postService.getPostsByPage(e, 5)
      .subscribe(c => {
        this.posts = c
      });
  }

}
