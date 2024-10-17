import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonContentPage } from './ion-content.page';

describe('IonContentPage', () => {
  let component: IonContentPage;
  let fixture: ComponentFixture<IonContentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
