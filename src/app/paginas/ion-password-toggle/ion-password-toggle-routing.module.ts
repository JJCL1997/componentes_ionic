import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPasswordTogglePage } from './ion-password-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: IonPasswordTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPasswordTogglePageRoutingModule {}
