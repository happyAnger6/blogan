import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-item',
  templateUrl: './admin-post-item.component.html',
  styleUrls: ['./admin-post-item.component.css']
})
export class AdminPostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() operFlag = new EventEmitter<number>();

  enterFlag: boolean = false;
  constructor(
    private postService: PostService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  mouseEnter(enter: boolean) {
    this.enterFlag = enter;
  }

  onEdit() {
    this.operFlag.emit(1);
  }

  onDelete() {
    this.operFlag.emit(0);
  }

}
