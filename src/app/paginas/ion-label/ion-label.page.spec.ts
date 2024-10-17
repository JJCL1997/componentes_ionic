import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonLabelPage } from './ion-label.page';

describe('IonLabelPage', () => {
  let component: IonLabelPage;
  let fixture: ComponentFixture<IonLabelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
