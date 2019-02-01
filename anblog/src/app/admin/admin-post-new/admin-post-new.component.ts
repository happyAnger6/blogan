import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';

@Component({
  selector: 'app-admin-post-new',
  templateUrl: './admin-post-new.component.html',
  styleUrls: ['./admin-post-new.component.css']
})
export class AdminPostNewComponent implements OnInit {
  newPost: Post = new Post();

  constructor(){}

  ngOnInit() {
  }

}
