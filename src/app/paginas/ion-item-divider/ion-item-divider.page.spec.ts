import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonItemDividerPage } from './ion-item-divider.page';

describe('IonItemDividerPage', () => {
  let component: IonItemDividerPage;
  let fixture: ComponentFixture<IonItemDividerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonItemDividerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
