import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpConfig } from '../../services/http.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() createNew = new EventEmitter<string>();
  public env: string;

  constructor() {
    this.env = new HttpConfig().getEnv();
  }

  ngOnInit(): void {}

  create() {
    this.createNew.emit("create");
  }
}
