import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { CreateService } from '../../services/create/create.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpConfig } from '../../services/http.config';
import { StateService } from '../../services/state/state.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})

export class TopicComponent implements OnInit {
  public topic;
  public user: User;
  public databinding: string;
  private env: boolean;
  public ajax_completed: boolean = false; // determines if content should be rendered

  constructor(
    private createService: CreateService,
    public stateService: StateService,
    private readService: ReadService, 
    private activatedRoute: ActivatedRoute) {
      this.env = new HttpConfig().getEnv();
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => 
    this.readTopic(params.id));

    this.stateService.userStateChanges().subscribe(newState => 
    this.user = newState);

    this.readService.readUser().subscribe((response: HttpResponse) => 
    this.stateService.updateUserState(response.data));
  } 

  sendReply(parentID, reply) {
    this.createService.createReply({
      reply,
      parentID,
      topicID: this.topic._id
    }).subscribe((response: HttpResponse) => {
      parentID === this.topic._id ? this.databinding = undefined : reply = undefined;
      
      this.readTopic(this.topic._id);
    })
  }

  configureImageURL(imageURL: string): string {
    return !this.env ? 
    'http://localhost:3000/assets/files/' + imageURL : 
    'https://vpnfind.site/assets/files/' + imageURL;
  }

  readTopic(id: string) {
    this.ajax_completed = false;
    this.readService.readTopic(id).subscribe((response: HttpResponse) => 
    this.topic = response.data, () => 
    console.log(new Error("Failed fetching data")), () => 
    this.ajax_completed = true);
  }
 
  showInput(reply, index) {
    let input = document.getElementById(`input-${index}`);

    if(!reply["showInput"]) {
      reply["showInput"] = true;
      input.focus();
    } else {
      reply["showInput"] = false;
      input.blur();
    };
  }
}
