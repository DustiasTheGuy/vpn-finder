import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { StateService } from '../../services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() user: User;
  public showAlert: boolean = false;

  constructor(public stateService: StateService, private router: Router) {}

  ngOnInit(): void {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  alert() {
    this.showAlert = true;
    //setTimeout(() => this.showAlert = false, 2000);
  }
}
