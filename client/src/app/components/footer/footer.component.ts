import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public message: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(msg: string) {
    console.log(msg)
  }

  goUp() {
   document.getElementById("main-navigation")
   .scrollIntoView({ behavior: "smooth", block: "end"})
  }
}
