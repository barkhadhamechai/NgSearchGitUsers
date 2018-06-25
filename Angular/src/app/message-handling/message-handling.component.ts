import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-message-handling',
  templateUrl: './message-handling.component.html',
  styleUrls: ['./message-handling.component.css']
})
export class MessageHandlingComponent implements OnInit {
  @Input() message = { body: '', type: '' };
  constructor() { }

  ngOnInit() {
  }
  

  setMessage(body, type, time = 30000) {
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => { this.message.body = ''; }, time);
  }

  dismiss() {
    this.message.body = '';
  }

}
