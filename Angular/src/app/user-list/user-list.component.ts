import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../app/http-client.service';
import { user } from './user.model';
import { RepoDetails } from './repo-details.model';
import { MessageHandlingComponent } from '../message-handling/message-handling.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  totalResults:number=0;
  p: number = 1;
  userList:user[]=new Array<user>();
  searchString:string='barkha';
  sortCondition:number=1;
  sortKey:string="login";
  isSortReverse:boolean=false;

  constructor(private httpService:HttpClientService,
    public toast: MessageHandlingComponent) { }

  ngOnInit() {
    this.searchUser();
  }

  sortList():void{
    switch(this.sortCondition){
      case 0:
      this.sortKey="login";
      this.isSortReverse=false;
        break;
      case 1:
      this.sortKey="login";
      this.isSortReverse=true;
        break;
      case 2:
      this.sortKey="score";
      this.isSortReverse=false;
        break;
      case 3:
      this.sortKey="score";
      this.isSortReverse=true;
        break;
    }
  }

  changedSearchString($event) {
    this.searchString = $event;
    this.searchUser();
  }

  changedSortCondition($event){
    this.sortCondition=$event;
    this.sortList();
  }

  searchUser():void{
    this.userList=new Array<user>();
    this.totalResults=0;
    var searchUrl:string='/search/users';
    var options = new Object({
      q: this.searchString
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
      },
      error=>{
        
      }
    );
  }

  getRepoDetails(userObject):void{
    userObject.showDetails=true;
    var fetchRepoUrl:string='/users/'+userObject.login+'/repos';
    if (userObject.repoList.length>0)
      return;
    this.httpService.get(fetchRepoUrl)
    .subscribe(
      response=>{
        for(let i=0;i<response.json().length;i++)
        {
            let repoDetail=new RepoDetails().deserialize(response.json()[i]);
            userObject.repoList.push(repoDetail);
        }
      },
      error=>{

      }
    )
  }

  

}
