import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPasswordTogglePageRoutingModule } from './ion-password-toggle-routing.module';

import { IonPasswordTogglePage } from './ion-password-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPasswordTogglePageRoutingModule
  ],
  declarations: [IonPasswordTogglePage]
})
export class IonPasswordTogglePageModule {}
