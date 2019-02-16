import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  @Input() post: Post;
  comment: Comment = new Comment();
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.comment.showFlag = 1;
  }

  addComment() {
    console.log(this.comment, this.post._id);
    this.commentService.addComment2Post(this.post._id.$oid, this.comment)
      .subscribe();
  }
}
