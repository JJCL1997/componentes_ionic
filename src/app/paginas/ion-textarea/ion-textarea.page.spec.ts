import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonTextareaPage } from './ion-textarea.page';

describe('IonTextareaPage', () => {
  let component: IonTextareaPage;
  let fixture: ComponentFixture<IonTextareaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonTextareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
