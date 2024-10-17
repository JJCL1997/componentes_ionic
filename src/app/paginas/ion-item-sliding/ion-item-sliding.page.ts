import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { archive, heart, trash } from 'ionicons/icons';

@Component({
  selector: 'app-ion-item-sliding',
  templateUrl: './ion-item-sliding.page.html',
  styleUrls: ['./ion-item-sliding.page.scss'],
})
export class IonItemSlidingPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ archive, heart, trash });
  }

  ngOnInit() {
  }

}
