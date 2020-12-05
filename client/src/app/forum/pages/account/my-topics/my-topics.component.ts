import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../../services/state/state.service';
import { ReadService } from '../../../services/read/read.service';
import { HttpResponse } from '../../../interfaces/http.interface';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-my-topics',
  templateUrl: './my-topics.component.html',
  styleUrls: ['./my-topics.component.scss', '../../page.scss']
})

export class MyTopicsComponent implements OnInit {
  @Input() open: boolean = false;
  public user: User;

  constructor(public stateService: StateService, private readService: ReadService) { }

  ngOnInit(): void {
    this.stateService.userStateChanges()
    .subscribe(newState => {
      this.user = newState;
    });

    this.readService.readUser()
    .subscribe((response: HttpResponse) => {
      this.stateService.updateUserState(response.data);
    });
  }
}
