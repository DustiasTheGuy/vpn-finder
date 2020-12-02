import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { User } from '../../interfaces/user.interface';
import { HttpResponse } from '../../interfaces/http.interface';
import { Categories } from '../../categories';
import { CreateService } from '../../services/create/create.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
  public user: User;
  public categories: string[];
  public breadCrumbs: string[];
  public formFields = {
    topic: 'What is Lorem Ipsum?',
    category: 'Frequently Asked Questions',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet vestibulum elit, at ultricies tellus. Vivamus sapien nulla, porta vitae erat eget, scelerisque accumsan urna. Fusce at nulla quis velit rutrum aliquet. Nullam efficitur nibh eu lobortis accumsan. Morbi consequat mattis aliquam. Etiam eget justo ligula. Suspendisse sollicitudin euismod felis, id interdum diam elementum in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec libero ut orci ullamcorper molestie lacinia sed augue. Proin tristique, tortor non consectetur pellentesque, tellus enim laoreet quam, ut vestibulum ipsum neque eget purus. Pellentesque ut sagittis libero. Donec eu risus dolor. Fusce sapien sapien, ultrices non augue eu, luctus posuere tellus. Sed fringilla vitae felis nec aliquam. Praesent et nunc eros.'
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
      console.log(response);
    })
  }

  categoryChange(newCategory: string): string[] {
    switch(newCategory) {
      case this.categories[0]: return this.breadCrumbs = [ 'Hello Everyone!', 'What is a VPN?', 'My First Post!'];
      case this.categories[1]: return this.breadCrumbs = [ 'I have a question about security' ];
      case this.categories[2]: return this.breadCrumbs = [ 'Should I buy a VPN?', 'What is the best VPN?' ];
      case this.categories[3]: return this.breadCrumbs = [ 'I have a question', 'I need help!'];
    };
  }

  upload(files) {
    console.log(files);
  }
}
