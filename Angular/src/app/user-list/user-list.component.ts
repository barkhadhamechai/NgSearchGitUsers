import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../app/http-client.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private httpService:HttpClientService) { }

  ngOnInit() {

  }

  searchUser(searchString):any{
    var searchUrl:string='/search/';
    var options = new Object({
      users: searchString
    });
    this.httpService.get(searchUrl,options).subscribe(
      response=>{
        console.log(response);
      }
    );
  }

}
