import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CKEditorModule } from 'ng2-ckeditor';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminCategoryNewComponent } from './admin-category-new/admin-category-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { AdminPostNewComponent } from './admin-post-new/admin-post-new.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminCategoryItemComponent } from './admin-category-item/admin-category-item.component';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { AdminPostItemComponent } from './admin-post-item/admin-post-item.component';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';

import { ToolsModule } from '../tools/tools.module';

@NgModule({
  imports: [
    SchemaFormModule.forRoot(),
    DlDateTimePickerDateModule,
    CKEditorModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminCategoryComponent,
    AdminCategoryNewComponent,
    AdminPostComponent,
    AdminCommentComponent,
    AdminPostNewComponent,
    AdminCategoryListComponent,
    AdminCategoryItemComponent,
    AdminPostListComponent,
    AdminPostItemComponent,
    AdminPostEditComponent
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})

export class AdminModule {}
