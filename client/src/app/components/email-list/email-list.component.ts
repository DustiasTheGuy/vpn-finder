import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/create/create.service';
import { HttpResponse } from '../../interfaces/http.interface'; 
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  public email: string;
  public errorMessage: string;
  public showEmailForm: boolean = true;

  constructor(
    private createService: CreateService, 
    private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.onToggle().subscribe((newState: boolean) => { this.showEmailForm = newState }); // Listen for event in jumbotron component
    this.showEmailForm = window.localStorage.getItem("showEmailForm") === "0" ? false : true; // apply saved state 
  }


  joinMailList(email: string) {
    if(!this.stateService.validateEmail(email)) {
      this.errorMessage = "You've entered an invalid email";
      setTimeout(() => this.errorMessage = undefined, 4800);
    } else {
      this.createService.addUser({ email: email.toLowerCase() })
      .subscribe((response: HttpResponse) => {
        if(response.success) {
          this.errorMessage = response.message;
          this.email = undefined;
          setTimeout(() => this.toggleEmailForm(), 4800);
        }
      })
    }
  }

  toggleEmailForm() { 
    this.showEmailForm = this.showEmailForm ? false : true; 
    window.localStorage.setItem("showEmailForm", this.showEmailForm ? "1" : "0");
  }

}

