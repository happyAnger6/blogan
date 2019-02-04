import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tools-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.css']
})
export class PageNavComponent implements OnInit {
  @Input() total_num: number;
  @Input() per_num: number;
  @Input() cur_page_in: number;
  @Output() cur_page_e = new EventEmitter<number>();
  total_pages: number = 0;
  cur_page: number = 0;
  all_pages  = new Array<number>();
  constructor() { }

  ngOnInit() {
    this.total_pages =  this.total_num / this.per_num;
    let mod = this.total_num % this.per_num;
    if(this.total_num > 0)
    {
      if (mod > 0)
      {
        this.total_pages += 1;
      }

      if(this.cur_page_in > 0)
        this.cur_page = this.cur_page_in;
      else
        this.cur_page = 1;

      this.total_pages = Math.floor(this.total_pages);
      for(let i = 1; i <= this.total_pages; i++)
        this.all_pages.push(i);
    }
  }

  onPrev() {
    if(this.cur_page > 1)
      this.cur_page -= 1;
      this.cur_page_e.emit(this.cur_page);
  }

  onPage(i) {
    if(i != this.cur_page ) {
      this.cur_page = i;
      this.cur_page_e.emit(this.cur_page);
    }
  }

  onNext() {
    if(this.cur_page + 1 <= this.total_pages){
      this.cur_page += 1;
      this.cur_page_e.emit(this.cur_page);
    }
  }
}
