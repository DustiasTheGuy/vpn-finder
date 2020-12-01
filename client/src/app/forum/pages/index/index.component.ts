import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { Categories } from '../../categories';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public user: User;
  public tableData;
  private categories;

  
  constructor(private stateService: StateService, private readService: ReadService) {
    this.categories = new Categories();
  }

  ngOnInit(): void {    
    this.readTopics();
    this.stateService.userStateChanges()
    .subscribe((newState: User) => {
      this.user = newState;
    });
  }


  readTopics() {
    this.readService.readTopics({}).subscribe((response: HttpResponse) => {
      console.log(response);
      this.tableData = response.data;
    })
  }
}