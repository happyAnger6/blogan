import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[] = [];
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.getAllCommentsByPost(this.post._id.$oid)
      .subscribe(c => {
        this.comments = c;
      });
  }

}
