import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { httpInterceptorProviders } from './http-interceptors/index';
import { InMemoryDataService } from './services/in-memory-data.service';

import { BsDropdownModule} from "ngx-bootstrap/dropdown";
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { MessagesComponent } from './messages/messages.component';
import { DynamicFormModelComponent } from './forms/dynamic-form-model/dynamic-form-model.component';
import { DynamicFormColComponent } from './forms/dynamic-form-col/dynamic-form-col.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

import { ToolsModule } from './tools/tools.module';
import { NavTopComponent } from './nav-top/nav-top.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';
import { SideBarMainComponent } from './side-bar/side-bar-main/side-bar-main.component';
import { MyHomePagesComponent } from './side-bar/my-home-pages/my-home-pages.component';
import { MyProjectsListComponent } from './side-bar/my-projects-list/my-projects-list.component';
import { BloganSourcesComponent } from './side-bar/blogan-sources/blogan-sources.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CategorySideScrollComponent } from './components/category-side-scroll/category-side-scroll.component';
import { CategorySideNavComponent } from './components/category-side-nav/category-side-nav.component';
import { CategorySideMenuComponent } from './components/category-side-menu/category-side-menu.component';
import { CategoryCSMainComponent } from './components/category-c-s-main/category-c-s-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NoPageComponent,
    HomepageComponent,
    FooterComponent,
    MessagesComponent,
    DynamicFormModelComponent,
    DynamicFormColComponent,
    CategoryMenuComponent,
    BreadcrumbComponent,
    PostListComponent,
    PostListItemComponent,
    NavTopComponent,
    PostDetailComponent,
    SocialShareComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    CategoryPostsComponent,
    SideBarMainComponent,
    MyHomePagesComponent,
    MyProjectsListComponent,
    BloganSourcesComponent,
    CommentEditComponent,
    CommentListComponent,
    CategorySideScrollComponent,
    CategorySideNavComponent,
    CategorySideMenuComponent,
    CategoryCSMainComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CKEditorModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 /*   HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/
    ToolsModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
