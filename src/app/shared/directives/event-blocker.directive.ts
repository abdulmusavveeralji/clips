import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appEventBlocker]'
})
export class EventBlockerDirective {

  constructor() { }

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public handleEvent(e: Event) {
    e.preventDefault()
  }

}
