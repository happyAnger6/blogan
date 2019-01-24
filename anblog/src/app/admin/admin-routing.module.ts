import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { AdminPostNewComponent } from './admin-post-new/admin-post-new.component';
import { AdminCategoryNewComponent } from './admin-category-new/admin-category-new.component';

const categoryRoutes = {
    path: 'category',
    component: AdminCategoryComponent,
    children: [
      {
        path: 'new',
        component: AdminCategoryNewComponent
      },
      {
        path: '',
        component: AdminCategoryNewComponent
      }
    ]
};

const postRoutes = {
    path: 'post',
    component: AdminPostComponent,
    children: [
      {
        path: 'new',
        component: AdminPostNewComponent
      },
      {
        path: '',
        component: AdminPostNewComponent
      }
    ]
};

const commentRoutes = {
    path: 'comment',
    component: AdminCommentComponent
};

const defaultRoutes = {
  path: '',
  component: AdminPostComponent
};

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      categoryRoutes,
      postRoutes,
      commentRoutes,
      defaultRoutes
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      adminRoutes
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
