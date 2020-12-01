import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() modalOpen: boolean = false;
  @Output() modalCloseEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  closeModal() {
    console.log("Emit")
    this.modalCloseEvent.emit(false);
  }

  prevent() {
    return;
  }
}
