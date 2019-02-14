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
  total_nums: number = 0;
  cur_page: number = 1;
  constructor(
    private postService: PostService
  ) { }

  updateData() {
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.total_nums = this.posts.length;
        this.postService.getPostsByPage(1, 8)
          .subscribe(c => {
            this.posts = c
          });
      });
  }

  ngOnInit() {
    this.updateData();
  }

  onOper(oper:number, post:Post) {
    if(oper != 0){
      this.editFlag = true;
      this.editPost = post;
    }
  }

  onEditResult(oper:number) {
    this.editFlag = false;
  }

  onSelectPage(curPage: number) {
    this.cur_page = curPage;
    this.postService.getPostsByPage(curPage, 8)
      .subscribe(c => {
        this.posts = c
      });
  }

}
