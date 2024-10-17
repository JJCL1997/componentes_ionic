import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonDatetimeButtonPage } from './ion-datetime-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonDatetimeButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonDatetimeButtonPageRoutingModule {}
