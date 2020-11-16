import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {}

  callToAction() {
    document.getElementById("grid")
    .scrollIntoView({ 
      behavior: "smooth" 
    });
  }

  toggleEmailForm() { this.stateService.toggleForm(true) }
  togglePrivacyDocs() { this.stateService.togglePrivacy(true) }
}
