import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNavComponent } from './page-nav/page-nav.component';

@NgModule({
  declarations: [
    PageNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNavComponent
  ]
})
export class ToolsModule { }
