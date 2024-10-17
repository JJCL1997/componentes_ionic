import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-app',
  templateUrl: './ion-app.page.html',
  styleUrls: ['./ion-app.page.scss'],
})
export class IonAppPage implements OnInit {

  constructor() { }
  focusElement(id: string) {
    const el = document.querySelector(id) as HTMLElement;

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }

  ngOnInit() {
  }

}
