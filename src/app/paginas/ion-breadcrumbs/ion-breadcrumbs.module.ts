import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonBreadcrumbsPageRoutingModule } from './ion-breadcrumbs-routing.module';

import { IonBreadcrumbsPage } from './ion-breadcrumbs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBreadcrumbsPageRoutingModule
  ],
  declarations: [IonBreadcrumbsPage]
})
export class IonBreadcrumbsPageModule {}
