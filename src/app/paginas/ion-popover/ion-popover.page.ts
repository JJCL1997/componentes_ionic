import { Component, OnInit, ViewChild } from '@angular/core';
import { IonPopover } from '@ionic/angular'; // Importamos IonPopover

@Component({
  selector: 'app-ion-popover',
  templateUrl: './ion-popover.page.html',
  styleUrls: ['./ion-popover.page.scss'],
})
export class IonPopoverPage implements OnInit {

  // Usamos el operador ! para indicar que se asignará más tarde
  @ViewChild('popover') popover!: IonPopover;

  isOpen = false;

  constructor() { }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  ngOnInit() {
  }

}
