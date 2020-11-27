import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  @Input() user: User;

  constructor(public stateService: StateService) {}

  ngOnInit(): void {
  }

}
