import { Component } from '@angular/core';

@Component({
  selector: 'app-ion-progress-bar',
  templateUrl: './ion-progress-bar.page.html',
  styleUrls: ['./ion-progress-bar.page.scss'],
})
export class IonProgressBarPage   {

  public progress = 0;
  public buffer = 0.06;

  constructor() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
    setInterval(() => {
      this.buffer += 0.06;
      this.progress += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
  }

  
  
}
