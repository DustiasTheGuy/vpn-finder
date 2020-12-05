import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../../services/state/state.service';
import { ReadService } from '../../../services/read/read.service';
import { HttpResponse } from '../../../interfaces/http.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../page.scss']
})

export class SettingsComponent implements OnInit {
  @Input() open: boolean = false;
  public user;

  constructor(
    private readService: ReadService,
    public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.userStateChanges()
    .subscribe(newState => 
      this.user = newState);

    this.readService.readUser()
    .subscribe((response: HttpResponse) => 
    this.stateService.updateUserState(response.data));
  }

}
