import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpConfig } from '../../services/http.config';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})

export class ReplyComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() reply;
  private env: boolean;
  public newReply: string;

  constructor(public stateService: StateService) {
    this.env = new HttpConfig().getEnv();
  }

  ngOnInit(): void {
    this.reply.expanded = false;
    this.reply.showInput = false;
  }

  configureImageURL(imageURL: string): string {
    return !this.env ? 
    'http://localhost:3000/assets/files/' + imageURL : 
    'https://vpnfind.site/assets/files/' + imageURL;
  }

  sendReply(event) {
    this.newItemEvent.emit({
      parentID: this.reply._id,
      reply: this.newReply
    });
  }
}
