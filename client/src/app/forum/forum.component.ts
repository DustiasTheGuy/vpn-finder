import { Component } from '@angular/core';
import { StateService } from './services/state/state.service';

@Component({
  selector: 'forum-root',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  constructor(private stateService: StateService) {}
  
  toggleSignIn() {
    this.stateService.toggleLoginModal(true);
  }
}
