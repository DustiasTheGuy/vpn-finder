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
  public label: string = "Join our email list!";
  public showEmailForm: boolean = true;

  constructor(
    private createService: CreateService, 
    private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.onToggle().subscribe((newState: boolean) => { this.showEmailForm = newState }); // Listen for event in jumbotron component
    this.showEmailForm = window.localStorage.getItem("showEmailForm") === "0" ? false : true; // apply saved state 
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  joinMailList(email: string) {
    if(!this.validateEmail(email)) {
      this.label = "You've entered an invalid email";
      setTimeout(() => this.label = "Join our email list!", 3000);
    } else {
      this.createService.addUser({ email: email.toLowerCase() })
      .subscribe((response: HttpResponse) => {
        if(response.success) {
          this.label = response.message;
          this.email = undefined;
          setTimeout(() => this.label = "Join our email list!", 3000);
        }
      })
    }
  }

  toggleEmailForm() { 
    this.showEmailForm = this.showEmailForm ? false : true; 
    window.localStorage.setItem("showEmailForm", this.showEmailForm ? "1" : "0");
  }

}

