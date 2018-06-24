import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { HttpModule } from '@angular/http';
import { HttpClientService } from './http-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SearchComponent,
    SortByComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
