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

  constructor(private createService: CreateService) { }

  ngOnInit(): void {
  }

  applyFilters() {
    this.filterProducts.emit(this.filter);
  }

  joinMailList(email: string) {
    if(email.length > 0) {
      this.createService.addUser({ email: email.toLowerCase() })
      .subscribe((response: HttpResponse) => {
        console.log(response)
      })
    }
  }
}
