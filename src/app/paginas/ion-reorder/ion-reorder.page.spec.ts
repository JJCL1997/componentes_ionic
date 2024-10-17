import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonReorderPage } from './ion-reorder.page';

describe('IonReorderPage', () => {
  let component: IonReorderPage;
  let fixture: ComponentFixture<IonReorderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
