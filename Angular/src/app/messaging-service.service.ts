import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessagingServiceService {

    object = new Object();

    toast: { body: '', type: '' };
    toastObject: Subject<any> = new Subject<any>();

    setToast(body, type) {
        this.toastObject.next({ body: body, type: type });
    }

    get(key) {
        return this.object[key];
    }

    public set(key, value) {
        this.object[key] = value;
    }

    clear(key) {
        delete this.object[key];
    }
}

