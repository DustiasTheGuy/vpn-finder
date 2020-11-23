import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public menuOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener("keydown", (e) => {
      if(e.code === "Escape") {
        this.menuOpen = !this.menuOpen ? true : false;
      };
    });
  }

}
 