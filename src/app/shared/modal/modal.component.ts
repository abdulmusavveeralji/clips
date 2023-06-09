import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy{

  @Input() modalID = '';
  constructor(public modal: ModalService, public el: ElementRef) {
    console.log(el);
  }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  openModal() {
    this.modal.toggleModal(this.modalID)
  }

  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement)
  }
}
