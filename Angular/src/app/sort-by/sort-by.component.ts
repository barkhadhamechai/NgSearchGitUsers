import { Component, OnInit } from '@angular/core';
import {sortList} from './sort-by.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  sortByList:typeof sortList=sortList;
  sortString:any;
  getSortKeys() : Array<string> {
    var keys = Object.keys(this.sortByList);
    return keys.slice(keys.length / 2);
}
}
