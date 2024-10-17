import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonItemGroupPage } from './ion-item-group.page';

describe('IonItemGroupPage', () => {
  let component: IonItemGroupPage;
  let fixture: ComponentFixture<IonItemGroupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonItemGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
