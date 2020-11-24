import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public message: string;
  public email: string;
  public name: string;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if(!this.stateService.validateEmail(this.email)) {
      // Invalid email
    }; 
  }

  goUp() {
   document.getElementById("main-navigation")
   .scrollIntoView({ behavior: "smooth", block: "end"})
  }

  toggleEmailForm() { this.stateService.toggleForm(true)}
  togglePrivacyDocs() { this.stateService.togglePrivacy(true)}
}
