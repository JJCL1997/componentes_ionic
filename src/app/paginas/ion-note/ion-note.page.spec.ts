import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonNotePage } from './ion-note.page';

describe('IonNotePage', () => {
  let component: IonNotePage;
  let fixture: ComponentFixture<IonNotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
