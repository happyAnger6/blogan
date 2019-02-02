import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { AdminPostNewComponent } from './admin-post-new/admin-post-new.component';
import { AdminCategoryNewComponent } from './admin-category-new/admin-category-new.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { AdminPostEidtComponent } from './admin-post-eidt/admin-post-eidt.component';

const categoryRoutes = {
    path: 'category',
    component: AdminCategoryComponent,
    children: [
      {
        path: 'new',
        component: AdminCategoryNewComponent
      },
      {
        path: 'list',
        component: AdminCategoryListComponent
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
        path: 'list',
        component: AdminPostListComponent
      },
      {
        path: 'edit',
        component: AdminPostEidtComponent
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
