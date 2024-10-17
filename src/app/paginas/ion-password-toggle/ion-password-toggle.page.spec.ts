import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonPasswordTogglePage } from './ion-password-toggle.page';

describe('IonPasswordTogglePage', () => {
  let component: IonPasswordTogglePage;
  let fixture: ComponentFixture<IonPasswordTogglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonPasswordTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
