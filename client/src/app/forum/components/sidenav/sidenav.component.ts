import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { StateService } from '../../services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() user: User;
  public showAlert: boolean = false;
  public sidenavState: boolean = false;
  public accountMenuOpen: boolean = false;

  constructor(public stateService: StateService, private router: Router) {}

  ngOnInit(): void {
    this.stateService.getSidenavState()
    .subscribe(newState => this.sidenavState = newState);
  }

  navigate(path: string) {
    this.stateService.updateSidenavState(false);
    this.router.navigate([path]);
  }

  alert() {
    this.showAlert = true;
    //setTimeout(() => this.showAlert = false, 2000);
  }
} 
