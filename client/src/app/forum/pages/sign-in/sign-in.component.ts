import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../form.scss']
})

export class SignInComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private router: Router,
    private stateService: StateService, 
    private readService: ReadService) { }

  ngOnInit(): void {
    this.autoFill();
  }

  signIn() {
    if(!this.stateService.validateEmail(this.email)) return;
    if(this.password.length <= 1) return;

    this.readService.signIn({ email: this.email, password: this.password })
    .subscribe((response: HttpResponse) => {
      if(response.success) 
      localStorage.setItem('token', response.data);

      this.readService.readUser()
      .subscribe((userObject: HttpResponse) => {
        this.stateService.updateUserState(userObject.data); // update user object
        this.stateService.updateSidenavState(true);
        this.router.navigate(['/forum/account/my-topics'])
      });

      return
    });
  }

  autoFill() {
    this.email = 'MyeqtQxWtqwt@gmail.com';
    this.password = 'helloworld123';
  }
}
