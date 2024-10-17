import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRadioPage } from './ion-radio.page';

describe('IonRadioPage', () => {
  let component: IonRadioPage;
  let fixture: ComponentFixture<IonRadioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
