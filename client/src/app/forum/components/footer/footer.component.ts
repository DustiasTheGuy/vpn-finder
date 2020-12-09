import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-forum-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }

  togglePrivacyDocs() {}
  toggleEmailForm() {}
}
