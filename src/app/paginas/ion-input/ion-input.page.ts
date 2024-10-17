import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-input',
  templateUrl: './ion-input.page.html',
  styleUrls: ['./ion-input.page.scss'],
})
export class IonInputPage implements OnInit {

  constructor() { }
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  ngOnInit() {
  }

}
