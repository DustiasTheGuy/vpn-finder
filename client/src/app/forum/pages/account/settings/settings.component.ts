import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../../services/state/state.service';
import { ReadService } from '../../../services/read/read.service';
import { UpdateService } from '../../../services/update/update.service';
import { HttpResponse } from '../../../interfaces/http.interface';
import { countries } from './countries';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../page.scss']
})

export class SettingsComponent implements OnInit {
  @Input() open: boolean = false;

  public days: number[] = [];
  public years: number[] = [];
  public countries: string[];
  public user;
  public message: any;
  public newEmail: string;
  public confirmEmail: string;
  public formState: boolean = false;
  
  constructor(
    private updateService: UpdateService,
    private readService: ReadService, 
    public stateService: StateService) {
    for(let i = 1; i < 32; i++) this.days.push(i);
    for(let i = 1900; i < 2022; i++) this.years.push(i);
    this.countries = countries;
  }

  setMessage(error?: boolean, message?: string) {
    error ? 
    this.message = {
      show: true,
      data: message || 'An error occured while updating your information',
      backgroundColor: '#b50707',
      borderColor: '#db8c9f',
      color: '#e89e9e'
    } :
    this.message = {
      show: true,
      data: message || 'Your settings have been updated',
      backgroundColor: '#0c8212',
      borderColor: '#14d91e',
      color: '#68e86f'
    };
  }

  ngOnInit(): void {
    this.stateService.userStateChanges()
    .subscribe(newState => 
    this.user = newState);
    this.loadUser();
  }

  loadUser(callback?: Function) {
    this.readService.readUser()
    .subscribe((response: HttpResponse) => 
    this.stateService.
    updateUserState(response.data), () => 
    this.setMessage(true), () => 
    this.newEmail = this.user.email);

    try {
      callback();
    } catch(err) {
      console.log('Finished')
    }
  }

  submit() {
    if(!this.formState) {
      for (let key in this.user.dateOfBirth) 
      this.user.dateOfBirth[key] = Number(this.user.dateOfBirth[key]);
  
      this.updateService.updateUser(this.user)
      .subscribe((response: HttpResponse) => 
      response.success ? 
      this.loadUser(() => this.setMessage(false, response.message)) : 
      this.setMessage(true, response.message));
    } else {
      if(this.user.email != this.confirmEmail) 
      return this.setMessage(true, 'emails do not match');

      console.log('change email')
    }
  }
}
