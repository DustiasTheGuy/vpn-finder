import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../../services/state/state.service';
import { User } from '../../../interfaces/user.interface';
import { CreateService } from '../../../services/create/create.service';
import { HttpResponse } from '../../../interfaces/http.interface';
import { HttpConfig } from '../../../services/http.config';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  @Input() user: User;

  constructor(public stateService: StateService, private createService: CreateService) {}

  ngOnInit(): void {
  }

  upload(e) {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    this.createService.uploadFile(formData)
    .subscribe((response: HttpResponse) => {
      if(response.success) this.user.imageURL = response.data;
    })
  }

  configureImageURL(imageURL: string): string {
    let env = new HttpConfig().getEnv();
    
    return !env ? 'http://localhost:3000/assets/files/' + imageURL : 'https://vpnfind.site/assets/files/' + imageURL;
  }
}
