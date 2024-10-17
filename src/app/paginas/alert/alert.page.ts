import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  alertButtons = ['Action'];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
  }

}
