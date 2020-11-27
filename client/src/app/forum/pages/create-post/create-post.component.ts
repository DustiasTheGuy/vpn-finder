import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { User } from '../../interfaces/user.interface';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
  public user: User;

  constructor(
    private readService: ReadService,
    private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.userStateChanges()
    .subscribe((state: User) => {
      this.user = state;
    });
    
    if(this.stateService.authorized()) {
      this.readService.readUser()
      .subscribe((response: HttpResponse) => {
        this.stateService.updateUserState(response.data);
      });
    }
  }
}
