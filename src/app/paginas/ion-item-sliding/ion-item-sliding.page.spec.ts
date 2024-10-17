import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonItemSlidingPage } from './ion-item-sliding.page';

describe('IonItemSlidingPage', () => {
  let component: IonItemSlidingPage;
  let fixture: ComponentFixture<IonItemSlidingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonItemSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
