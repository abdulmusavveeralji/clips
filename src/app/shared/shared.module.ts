import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputsComponent } from './inputs/inputs.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import { AlertComponent } from './alert/alert.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputsComponent,
    AlertComponent,
    EventBlockerDirective
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
    AlertComponent,
    EventBlockerDirective
  ],
  providers: [provideEnvironmentNgxMask()]
})
export class SharedModule { }
