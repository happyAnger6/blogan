import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.css']
})
export class AdminPostListComponent implements OnInit {
  editFlag: boolean = false;
  posts: Post[];
  editPost: Post;
  constructor(
    private postService: PostService
  ) { }

  updateData() {
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnInit() {
    this.updateData();
  }

  onOper(oper:number, post:Post) {
    this.editFlag = true;
    this.editPost = post;
    console.log(oper, post.title);
  }

  onEditResult(oper:number) {
    this.editFlag = false;
  }

}
