import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

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
}
