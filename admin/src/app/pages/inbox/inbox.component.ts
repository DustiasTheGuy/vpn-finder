import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public messages;
  public message;

  constructor(private sanitizer: DomSanitizer, private readService: ReadService) { }

  ngOnInit(): void {
    this.readMessages();
  }

  readMessages() {
    this.readService.readMessages()
    .subscribe((response: HttpResponse) => {
      if(response.success) this.messages = response.data;
      this.viewMessage(this.messages[0]._id);
    });
  }


  viewMessage(id) {
    this.readService.readMessage(id)
    .subscribe((response: HttpResponse) => {
      console.log(response);
      if(response.success) {
        this.message = response.data;
      };
    })
  }


  fixUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
