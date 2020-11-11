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

  joinMailList(email: string) {
    if(email.length > 0) {
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

  applyFilters() { this.filterProducts.emit(this.filter) }
  toggleEmailForm() { this.showEmailForm = this.showEmailForm ? false : true }
}
