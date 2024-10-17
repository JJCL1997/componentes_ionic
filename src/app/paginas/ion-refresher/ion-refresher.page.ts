import { Component } from '@angular/core';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.page.html',
  styleUrls: ['./ion-refresher.page.scss'],
})
export class IonRefresherPage {

  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Cualquier llamada para cargar datos va aquí
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }

}
