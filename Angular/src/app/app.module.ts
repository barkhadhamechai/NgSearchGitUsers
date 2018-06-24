import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { HttpClientService } from './http-client.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SearchComponent,
    SortByComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
