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
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(c => {
        this.posts = c
      });
  }

}
