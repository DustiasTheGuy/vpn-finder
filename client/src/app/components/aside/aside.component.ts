import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from '../../services/create/create.service';
import { HttpResponse } from '../../interfaces/http.interface'; 

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  @Output() filterProducts = new EventEmitter<string>();
  public filter: string = "all";
  public email: string;
  public label: string = "Join Our Mailing List!";
  public showEmailForm: boolean = true;

  constructor(private createService: CreateService) { }

  ngOnInit(): void {}

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  joinMailList(email: string) {
    if(!this.validateEmail(email)) {
      this.label = "You've entered an invalid email";
      setTimeout(() => this.label = "Join Our Email List!", 3000);
    } else {
      this.createService.addUser({ email: email.toLowerCase() })
      .subscribe((response: HttpResponse) => {
        if(response.success) {
          this.label = response.message;
          this.email = undefined;
          setTimeout(() => this.label = "Join Our Email List!", 3000);
        }
      })
    }
  }

  stopFocus($) { document.getElementById("filter").blur() }
  applyFilters() { this.filterProducts.emit(this.filter) }
  toggleEmailForm() { this.showEmailForm = this.showEmailForm ? false : true }
}
