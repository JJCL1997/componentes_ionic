import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi ,pin, share, trash } from 'ionicons/icons';


@Component({
  selector: 'app-ion-item',
  templateUrl: './ion-item.page.html',
  styleUrls: ['./ion-item.page.scss'],
})
export class IonItemPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ airplane, bluetooth, call, wifi, pin, share, trash });
  }
  ngOnInit() {
  }
  

}
