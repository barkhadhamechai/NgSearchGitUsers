import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: string = '';
  @Output() changedSearchString = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendSearchStringChangeEvent() {
    this.changedSearchString.emit(this.searchString)
  }
}
