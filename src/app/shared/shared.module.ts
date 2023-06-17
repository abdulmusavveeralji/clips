import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputsComponent } from './inputs/inputs.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputsComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputsComponent
  ]
})
export class SharedModule { }
