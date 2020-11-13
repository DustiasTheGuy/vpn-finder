import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {}

  toggleEmailForm() { this.stateService.toggleForm(true) }
  togglePrivacyDocs() { this.stateService.togglePrivacy(true) }
}
