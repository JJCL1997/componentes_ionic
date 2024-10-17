import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonDatetimeButtonPageRoutingModule } from './ion-datetime-button-routing.module';

import { IonDatetimeButtonPage } from './ion-datetime-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonDatetimeButtonPageRoutingModule
  ],
  declarations: [IonDatetimeButtonPage]
})
export class IonDatetimeButtonPageModule {}
