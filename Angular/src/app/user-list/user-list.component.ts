import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../app/http-client.service';
import { user } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:user[]=new Array<user>();
  constructor(private httpService:HttpClientService) { }

  ngOnInit() {

  }

  searchUser(searchString):any{
    var searchUrl:string='/search/users';
    var options = new Object({
      q: searchString
    });
    this.httpService.get(searchUrl,options)
    .subscribe(
      response=>{
        console.log(response);
        for(let i=0;i<response.json().items.length;i++){
          let userJson=response.json().items[i];
          let u=new user().deserialize(userJson);
          this.userList.push(u);
        }
      }
    );
  }

}
