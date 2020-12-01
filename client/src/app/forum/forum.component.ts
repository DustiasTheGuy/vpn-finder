import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state/state.service';
import { User } from './interfaces/user.interface';
import { ReadService } from './services/read/read.service';
import { HttpResponse } from './interfaces/http.interface';

@Component({
  selector: 'forum-root',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})

export class ForumComponent implements OnInit {
  public user: User;

  constructor(
    public stateService: StateService, 
    private readService: ReadService) {}

  ngOnInit() {
    this.readService.readUser()
    .subscribe((response: HttpResponse) => {
      if(!response.success) return this.stateService.signOut();
      else return this.stateService.updateUserState(response.data);
    });

    this.stateService.userStateChanges()
    .subscribe((newState: User) => {
      this.user = newState;
    });
  }
}
 