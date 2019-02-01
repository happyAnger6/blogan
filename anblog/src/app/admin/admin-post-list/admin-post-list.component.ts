import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.css']
})
export class AdminPostListComponent implements OnInit {
  enterFlag: boolean = false;
  posts: Post[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    console.log('aaaa');
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

  onBlur(enter: boolean, post: Post) {
    if (enter) {
      console.log('enter');
    }
    else {
      console.log('leave');
    }
  }

}
