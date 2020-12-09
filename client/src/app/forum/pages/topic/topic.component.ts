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
  public customStyles = {
    bgAlpha: '.78',
    bgColor: '0',
    completed: ''
  }

  public ajax_completed: boolean = false; // determines if content should be rendered
  public imageViewer = {
    show: false,
    index: 0
  }

  constructor(
    private createService: CreateService,
    public stateService: StateService,
    private readService: ReadService, 
    private activatedRoute: ActivatedRoute) {
      this.env = new HttpConfig().getEnv();
  }

  ngOnInit(): void {
    this.customize();

    this.activatedRoute.params.subscribe(params => 
    this.readTopic(params.id, () => {
      this.ajax_completed = true
    }));

    this.stateService.userStateChanges().subscribe(newState => 
    this.user = newState);

    this.readService.readUser().subscribe((response: HttpResponse) => 
    this.stateService.updateUserState(response.data));

  } 

  customize() {
    let color = this.customStyles.bgColor;
    this.customStyles.completed = `
    rgba(
      ${color}, 
      ${color},
      ${color},
      ${this.customStyles.bgAlpha}
    )`
  }

  toggleImageViewer(img: string) {
    this.imageViewer.index = this.topic.imageURLs.indexOf(img);
    this.imageViewer.show = !this.imageViewer.show ? true : false
  } 

  newReply(data) {
    this.sendReply(data.parentID, data.reply);
  }

  sendReply(parentID, reply) {
    this.createService.createReply({
      reply,
      parentID,
      topicID: this.topic._id
    }).subscribe((response: HttpResponse) => {
      parentID === this.topic._id ? this.databinding = undefined : reply = undefined;
      
      this.readTopic(this.topic._id, () => {
        console.log("Data refreshed...");
        this.ajax_completed = true;
      });
    });
  }

  configureImageURL(imageURL: string): string {
    return !this.env ? 
    'http://localhost:3000/assets/files/' + imageURL : 
    'https://vpnfind.site/assets/files/' + imageURL;
  }

  readTopic(id: string, cb) {
    this.ajax_completed = false;
    this.readService.readTopic(id).subscribe((response: HttpResponse) => 
    this.topic = response.data, () => 
    console.log(new Error("Failed fetching data")), () => cb());
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
