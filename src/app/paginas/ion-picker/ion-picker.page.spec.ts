import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonPickerPage } from './ion-picker.page';

describe('IonPickerPage', () => {
  let component: IonPickerPage;
  let fixture: ComponentFixture<IonPickerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
