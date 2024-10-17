import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonBreadcrumbsPage } from './ion-breadcrumbs.page';

describe('IonBreadcrumbsPage', () => {
  let component: IonBreadcrumbsPage;
  let fixture: ComponentFixture<IonBreadcrumbsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonBreadcrumbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
