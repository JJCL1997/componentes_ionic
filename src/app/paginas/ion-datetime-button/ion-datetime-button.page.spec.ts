import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonDatetimeButtonPage } from './ion-datetime-button.page';

describe('IonDatetimeButtonPage', () => {
  let component: IonDatetimeButtonPage;
  let fixture: ComponentFixture<IonDatetimeButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonDatetimeButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
