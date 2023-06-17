import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputsComponent } from './inputs/inputs.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputsComponent,
    AlertComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputsComponent,
    AlertComponent
  ],
  providers: [provideEnvironmentNgxMask()]
})
export class SharedModule { }
