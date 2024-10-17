import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonAppPage } from './ion-app.page';

describe('IonAppPage', () => {
  let component: IonAppPage;
  let fixture: ComponentFixture<IonAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
