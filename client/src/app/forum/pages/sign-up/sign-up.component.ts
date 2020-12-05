import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from '../../services/create/create.service';
import { ReadService } from '../../services/read/read.service';
import { StateService } from '../../services/state/state.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../form.scss']
})

export class SignUpComponent implements OnInit {
  public email: string;
  public password: string;
  public confirm: string;

  constructor(
    private router: Router,
    private stateService: StateService,
    private readService: ReadService,
    private createService: CreateService
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.createService.signUp({
      email: this.email,
      password: this.password,
      confirm: this.confirm
    }).subscribe((response: HttpResponse) => {
      if(response.success) {
        this.readService.signIn({
          email: this.email,
          password: this.password
        }).subscribe((response: HttpResponse) => {
          localStorage.setItem('token', response.data);
          this.readService.readUser()
          .subscribe((userObject: HttpResponse) => {
            this.stateService.updateUserState(userObject.data); // update user object
            this.stateService.updateSidenavState(true);
            this.router.navigate(['/forum'])
          });
        });
      } 
    });
  }
}
