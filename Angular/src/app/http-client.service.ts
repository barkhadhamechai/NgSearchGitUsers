import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {MessagingServiceService } from './messaging-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseUrl: string;
  constructor(private http: Http,
    private messagingService: MessagingServiceService) {
    this.baseUrl = 'https://api.github.com';
  }
  get(url, params = {}) {
    const urlParameters = Object.keys(params).map((i) => i + '=' + params[i]).join('&');
    return this.http.get(this.baseUrl + url + '?' + urlParameters)
      .do((data) => {
        console.log('data', data);
      },(error) => {
        if (error.status === 0) {
          this.messagingService.setToast('Please check Internet Access', 'error');
          return;
        }
        if (error.status >= 500) {
          this.messagingService.setToast('Some error occured. Please contact support as soon as possible', 'error');
          return;
        }
        this.messagingService.setToast(JSON.parse(error._body).message, 'error');
      
      });
  }
}
