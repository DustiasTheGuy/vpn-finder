import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { User } from '../../interfaces/user.interface';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  public user;

  constructor(
    private readService: ReadService,
    public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.userStateChanges()
    .subscribe((newState: User) => 
    this.user = newState);

    this.readService.readUser()
    .subscribe((response: HttpResponse) => 
    this.stateService.updateUserState(response.data))
  }

}
