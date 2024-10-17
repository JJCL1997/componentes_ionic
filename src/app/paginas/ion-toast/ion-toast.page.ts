import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ion-toast',
  templateUrl: './ion-toast.page.html',
  styleUrls: ['./ion-toast.page.scss'],
})
export class IonToastPage implements OnInit {

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  ngOnInit() {
  }

}
