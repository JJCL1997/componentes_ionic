import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-action-sheet',
  templateUrl: './ion-action-sheet.page.html',
  styleUrls: ['./ion-action-sheet.page.scss'],
})
export class IonActionSheetPage implements OnInit {
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
