import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { sortList } from './sort-by.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  sortByList: typeof sortList = sortList;
  sortString: any;
  @Output() changedSortCondition = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  getSortKeys(): Array<string> {
    var keys = Object.keys(this.sortByList);
    return keys.slice(keys.length / 2);
  }

  sendSortChangeEvent() {
    this.changedSortCondition.emit(+this.sortByList[this.sortString]);
  }
}
