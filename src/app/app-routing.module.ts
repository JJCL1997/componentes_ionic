import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'ion-action-sheet',
    loadChildren: () => import('./paginas/ion-action-sheet/ion-action-sheet.module').then( m => m.IonActionSheetPageModule)
  },
  {
    path: 'insignia',
    loadChildren: () => import('./paginas/insignia/insignia.module').then( m => m.InsigniaPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./paginas/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'ion-accordion',
    loadChildren: () => import('./paginas/ion-accordion/ion-accordion.module').then( m => m.IonAccordionPageModule)
  },
  {
    path: 'ion-breadcrumbs',
    loadChildren: () => import('./paginas/ion-breadcrumbs/ion-breadcrumbs.module').then( m => m.IonBreadcrumbsPageModule)
  },
  {
    path: 'ion-ripple-effect',
    loadChildren: () => import('./paginas/ion-ripple-effect/ion-ripple-effect.module').then( m => m.IonRippleEffectPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./paginas/ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./paginas/ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./paginas/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-app',
    loadChildren: () => import('./paginas/ion-app/ion-app.module').then( m => m.IonAppPageModule)
  },
  {
    path: 'ion-content',
    loadChildren: () => import('./paginas/ion-content/ion-content.module').then( m => m.IonContentPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./paginas/ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-datetime-button',
    loadChildren: () => import('./paginas/ion-datetime-button/ion-datetime-button.module').then( m => m.IonDatetimeButtonPageModule)
  },
  {
    path: 'ion-picker',
    loadChildren: () => import('./paginas/ion-picker/ion-picker.module').then( m => m.IonPickerPageModule)
  },
  {
    path: 'ion-fab',
    loadChildren: () => import('./paginas/ion-fab/ion-fab.module').then( m => m.IonFabPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./paginas/ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-input',
    loadChildren: () => import('./paginas/ion-input/ion-input.module').then( m => m.IonInputPageModule)
  },
  {
    path: 'ion-password-toggle',
    loadChildren: () => import('./paginas/ion-password-toggle/ion-password-toggle.module').then( m => m.IonPasswordTogglePageModule)
  },
  {
    path: 'ion-textarea',
    loadChildren: () => import('./paginas/ion-textarea/ion-textarea.module').then( m => m.IonTextareaPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./paginas/ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'ion-item-divider',
    loadChildren: () => import('./paginas/ion-item-divider/ion-item-divider.module').then( m => m.IonItemDividerPageModule)
  },
  {
    path: 'ion-item-group',
    loadChildren: () => import('./paginas/ion-item-group/ion-item-group.module').then( m => m.IonItemGroupPageModule)
  },
  {
    path: 'ion-item-sliding',
    loadChildren: () => import('./paginas/ion-item-sliding/ion-item-sliding.module').then( m => m.IonItemSlidingPageModule)
  },
  {
    path: 'ion-label',
    loadChildren: () => import('./paginas/ion-label/ion-label.module').then( m => m.IonLabelPageModule)
  },
  {
    path: 'ion-note',
    loadChildren: () => import('./paginas/ion-note/ion-note.module').then( m => m.IonNotePageModule)
  },
  {
    path: 'ion-list-header',
    loadChildren: () => import('./paginas/ion-list-header/ion-list-header.module').then( m => m.IonListHeaderPageModule)
  },
  {
    path: 'ion-avatar',
    loadChildren: () => import('./paginas/ion-avatar/ion-avatar.module').then( m => m.IonAvatarPageModule)
  },
  {
    path: 'ion-menu',
    loadChildren: () => import('./paginas/ion-menu/ion-menu.module').then( m => m.IonMenuPageModule)
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./paginas/ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'ion-popover',
    loadChildren: () => import('./paginas/ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },
  {
    path: 'ion-progress-bar',
    loadChildren: () => import('./paginas/ion-progress-bar/ion-progress-bar.module').then( m => m.IonProgressBarPageModule)
  },
  {
    path: 'ion-radio',
    loadChildren: () => import('./paginas/ion-radio/ion-radio.module').then( m => m.IonRadioPageModule)
  },
  {
    path: 'ion-refresher',
    loadChildren: () => import('./paginas/ion-refresher/ion-refresher.module').then( m => m.IonRefresherPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./paginas/ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-reorder',
    loadChildren: () => import('./paginas/ion-reorder/ion-reorder.module').then( m => m.IonReorderPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./paginas/ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-select',
    loadChildren: () => import('./paginas/ion-select/ion-select.module').then( m => m.IonSelectPageModule)
  },
  {
    path: 'ion-tabs',
    loadChildren: () => import('./paginas/ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },
  {
    path: 'ion-toast',
    loadChildren: () => import('./paginas/ion-toast/ion-toast.module').then( m => m.IonToastPageModule)
  },
  {
    path: 'ion-toggle',
    loadChildren: () => import('./paginas/ion-toggle/ion-toggle.module').then( m => m.IonTogglePageModule)
  },
  {
    path: 'ion-toolbar',
    loadChildren: () => import('./paginas/ion-toolbar/ion-toolbar.module').then( m => m.IonToolbarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
