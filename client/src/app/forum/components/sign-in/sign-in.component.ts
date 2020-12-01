import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public email: string = 'MyeqtQxWtqwt@gmail.com';
  public password: string = 'helloworld123';
  public showSignUpModal: boolean = false;
  constructor(private stateService: StateService, private readService: ReadService) { }

  ngOnInit(): void {
  }

  signIn() {
    if(!this.stateService.validateEmail(this.email)) return;
    if(this.password.length <= 1) return;

    this.readService.signIn({ email: this.email, password: this.password })
    .subscribe((response: HttpResponse) => {
      if(response.success) 
      localStorage.setItem("token", response.data);

      this.readService.readUser()
      .subscribe((userObject: HttpResponse) => {
        this.stateService.updateUserState(userObject.data); // update user object
      });

      return
    })
  }
}
