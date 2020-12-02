import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})

export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() filesUploaded = new EventEmitter<any>();

  constructor() {}

  @HostListener('dragover', ['$event']) 
  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event'])
  onFileDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
    
    if(e.dataTransfer.files.length > 0) this.filesUploaded.emit(e.dataTransfer.files);
  }
}
