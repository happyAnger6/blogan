import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-item',
  templateUrl: './admin-post-item.component.html',
  styleUrls: ['./admin-post-item.component.css']
})
export class AdminPostItemComponent implements OnInit {
  @Input() post: Post;
  enterFlag: boolean = false;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
  }

  mouseEnter(enter: boolean) {
    this.enterFlag = enter;
  }

}
