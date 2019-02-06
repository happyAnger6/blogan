import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 /*   HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/
    ToolsModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
