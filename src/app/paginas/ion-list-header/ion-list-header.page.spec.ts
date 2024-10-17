import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonListHeaderPage } from './ion-list-header.page';

describe('IonListHeaderPage', () => {
  let component: IonListHeaderPage;
  let fixture: ComponentFixture<IonListHeaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonListHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
