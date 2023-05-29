import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: IModal[] = [];
  constructor() { }

  isModalVisible(id: string) {
    return !!this.modals.find(e => e.id === id)?.visible;
  }

  toggleModal(id: string) {
    let modal = this.modals.find(e => e.id === id);
    if(modal)
      modal.visible = !modal.visible;
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  unregister(id: string) {
    this.modals = this.modals.filter(e => e.id !== id);
  }
}
