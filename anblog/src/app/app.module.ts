import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { httpInterceptorProviders } from './http-interceptors/index';
import { InMemoryDataService } from './services/in-memory-data.service'

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
  ],
  imports: [
    BrowserModule,
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
