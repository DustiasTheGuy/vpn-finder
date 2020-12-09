import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state/state.service';
import { ReadService } from '../../../services/read/read.service';
import { User } from '../../../interfaces/user.interface';
import { HttpResponse } from '../../../interfaces/http.interface';
import { Categories } from '../../../categories';
import { CreateService } from '../../../services/create/create.service';
import { HttpConfig } from '../../../services/http.config';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
  public user: User;
  public categories: string[];
  public breadCrumbs: string[];
  
  public alert = {
    show: false,
    data: "Hello, World",
    backgroundColor: "#eb4034",
    color: "#ffffff"
  };

  public formFields = {
    topic: 'tempor incididunt ut labore et dolore',
    category: 'Frequently Asked Questions',
    body: 'Sit amet massa vitae tortor condimentum lacinia quis. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Eget gravida cum sociis natoque penatibus et magnis dis. Id interdum velit laoreet id donec ultrices. Eget egestas purus viverra accumsan in nisl nisi. Aliquet nibh praesent tristique magna sit amet purus. Adipiscing diam donec adipiscing tristique. Mi in nulla posuere sollicitudin aliquam. A diam maecenas sed enim. Neque sodales ut etiam sit amet nisl. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Erat velit scelerisque in dictum non. Et malesuada fames ac turpis. Morbi tristique senectus et netus et malesuada fames ac. Vulputate odio ut enim blandit volutpat maecenas volutpat. Elit sed vulputate mi sit amet mauris. Integer feugiat scelerisque varius morbi enim nunc faucibus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Nisi porta lorem mollis aliquam ut porttitor. Diam vulputate ut pharetra sit.',
    images: [ 
      'placeholder1.jpeg',
      'placeholder2.jpeg', 
      'placeholder3.jpeg',
      'placeholder4.jpeg',
      'placeholder5.jpeg'
    ]
  };

  constructor(
    private createService: CreateService,
    private readService: ReadService, 
    private stateService: StateService) {
    this.categories = new Categories().getCategories();
    this.categoryChange(this.categories[0]);
  }

  ngOnInit(): void {
    this.stateService.userStateChanges().subscribe((state: User) => {
      this.user = state
    });

    this.readUser();
  }

  readUser() {
    this.readService.readUser()
    .subscribe((response: HttpResponse) => {
      if(response.success) this.stateService.updateUserState(response.data)
    });
  }

  submit() {
    this.createService.createTopic(this.formFields)
    .subscribe((response: HttpResponse) => {
      this.alert.show = true;
      this.alert.data = response.message;
      if(response.success) {
        this.alert.backgroundColor = "#088c34";
        //this.formFields = { topic: undefined, category: 'Frequently Asked Questions', body: undefined, images: [] };
      } else {
        this.alert.backgroundColor = "#eb4034";
      };
    });
  }

  configureImageURL(imageURL: string): string {
    let env = new HttpConfig().getEnv();
    
    return !env ? 'http://localhost:3000/assets/files/' + imageURL : 'https://vpnfind.site/assets/files/' + imageURL;
  }

  categoryChange(newCategory: string): string[] {
    switch(newCategory) {
      case this.categories[0]: return this.breadCrumbs = [ 'Hello Everyone!', 'What is a VPN?', 'My First Post!' ]; // Frequently Asked Questions
      case this.categories[1]: return this.breadCrumbs = [ 'I have a question about security', 'How does a VPN improve security?' ];  // Security Related
      case this.categories[2]: return this.breadCrumbs = [ 'Should I buy a VPN?', 'What is the best VPN?' ]; // Virtual Private Networks
      case this.categories[3]: return this.breadCrumbs = [ 'I have a question', 'I need help!', 'How do I get a VPN?', 'How do I secure my computer?' ]; // General Questions
      default: return [];
    };
  }

  upload(files: FileList) {
    if(this.formFields.images.length >= 10) {
      this.alert.backgroundColor = "#eb4034";
      this.alert.data = "You can only have 10 images";
      this.alert.show = true;
      return;
    }

    let formData = new FormData();

    for(let i = 0; i < files.length; i++)
    formData.append('File', files[i]);

    this.createService.uploadFiles(formData)
    .subscribe((response: HttpResponse) => 
    response.data.forEach(element => this.formFields.images.push(element.name)))
  }

}
