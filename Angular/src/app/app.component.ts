import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { MessagingServiceService } from './messaging-service.service';
import {MessageHandlingComponent} from './message-handling/message-handling.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(messagingComponent: MessageHandlingComponent,
    private messagingService: MessagingServiceService) {
      messagingService.toastObject.subscribe((toast) => {
        messagingComponent.setMessage(toast.body, toast.type);
    });
  }
}
