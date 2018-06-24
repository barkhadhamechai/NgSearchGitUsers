import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../app/http-client.service';
import { user } from './user.model';
import { RepoDetails } from './repo-details.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  totalResults:number=0;
  p: number = 1;
  userList:user[]=new Array<user>();
  constructor(private httpService:HttpClientService) { }

  ngOnInit() {

  }

  searchUser(searchString):void{
    var searchUrl:string='/search/users';
    var options = new Object({
      q: searchString
    });
    this.httpService.get(searchUrl,options)
    .subscribe(
      response=>{
        this.totalResults=response.json().total_count;
        for(let i=0;i<response.json().items.length;i++){
          let userJson=response.json().items[i];
          let u=new user().deserialize(userJson);

          this.userList.push(u);
        }
      }
    );
  }

  getRepoDetails(userObject):void{
    var fetchRepoUrl:string='/users/'+userObject.login+'/repos';
    this.httpService.get(fetchRepoUrl)
    .subscribe(
      response=>{
        for(let i=0;i<response.json().length;i++)
        {
            let repoDetail=new RepoDetails().deserialize(response.json()[i]);
            userObject.repoList.push(repoDetail);
        }
      }
    )
  }

}
