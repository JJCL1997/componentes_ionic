import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRippleEffectPage } from './ion-ripple-effect.page';

describe('IonRippleEffectPage', () => {
  let component: IonRippleEffectPage;
  let fixture: ComponentFixture<IonRippleEffectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRippleEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
