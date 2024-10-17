import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-picker',
  templateUrl: './ion-picker.page.html',
  styleUrls: ['./ion-picker.page.scss'],
})
export class IonPickerPage   {

  currentValue = 'javascript';

  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }

  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }

}
