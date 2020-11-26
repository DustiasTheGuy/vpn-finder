import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})

export class SignupModalComponent implements OnInit {
  public modalOpen: boolean = false;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.stateUpdateLoginModal()
    .subscribe((newState: boolean) => {
      this.modalOpen = newState;
    });
  }

}
