import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss', '../page.scss']
})

export class AccountSettingsComponent implements OnInit {
  @Input() open: boolean = false;

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }

}
