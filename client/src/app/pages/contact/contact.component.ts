import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { CreateService } from '../../services/create/create.service';
import { HttpResponse } from '../../interfaces/http.interface';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public formData = {
    email: "mark@gmail.com",
    name: "Mark Anderson",
    message: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }

  public formState = {
    error: false,
    message: undefined
  }

  public attachments: Array<File> = [];
  
  constructor(
    private createService: CreateService,
    private stateService: StateService) { }

  ngOnInit(): void {}

  addFiles(e) {
    let files: Array<File> = e.target.files;
    for(let i = 0; i < files.length; i++) this.attachments.push(files[i]);
  }

  appendFiles(): FormData {
    let arr: FormData = new FormData();

    this.attachments.forEach(file => {
      arr.append("Files", file);
    })

    arr.append("data", JSON.stringify(this.formData));
    return arr;
  }

  send() {
    let dataAccepted = this.checkFields(this.formData);

    if(dataAccepted.success) {
      this.createService.sendMessage(this.appendFiles())
      .subscribe((response: HttpResponse) => {
        console.log(response);

        this.formState.message = response.message;
        this.formState.error = !response.success;
        
        if(response.success) {
          this.formData.email = "";
          this.formData.name = "";
          this.formData.message = "";
          this.attachments = [];
        };

        setTimeout(() => {
          this.formState.message = undefined;
        }, 5000);

      });
    } else {
      this.formState.message = dataAccepted.message;
      this.formState.error = !dataAccepted.success;

      setTimeout(() => {
        this.formState.message = undefined;
      }, 5000);
      
    };
    
  }


  checkFields(data) {
    if(!this.stateService.validateEmail(data.email)) return { success: false, message: "You've entered an invalid email" }

    else if(data.name.length < 1) return { success: false, message: "You forgot to enter your name" }   

    else if(data.message.length < 20) return { success: false, message: "You must enter a message that is 20 or more characters" }

    else return { success: true, message: undefined };
  }

  parseBytes(bytes: number): number { return Math.ceil(bytes / 1000) }

}
