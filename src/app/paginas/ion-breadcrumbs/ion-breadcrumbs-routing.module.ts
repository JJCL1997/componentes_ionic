import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonBreadcrumbsPage } from './ion-breadcrumbs.page';

const routes: Routes = [
  {
    path: '',
    component: IonBreadcrumbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonBreadcrumbsPageRoutingModule {}
