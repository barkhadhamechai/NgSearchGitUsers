import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseUrl: string;
  constructor(private http: Http) { 
    this.baseUrl='https://api.github.com/';
  }
  get(url, params = {}) {
  const urlParameters = Object.keys(params).map((i) => i + '=' + params[i]).join('&');
    return this.http.get(this.baseUrl + url + '?' + urlParameters)
        .do((data) => {
        console.log('data', data);
      }, (error) => {
        if (error.status === 0) {
          return;
        }
        if (error.status >= 500) {
          return;
        }
        
      });
  }
}
