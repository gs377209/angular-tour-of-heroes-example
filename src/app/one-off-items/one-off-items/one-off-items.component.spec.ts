import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOffItemsComponent } from './one-off-items.component';

describe('OneOffItemsComponent', () => {
  let component: OneOffItemsComponent;
  let fixture: ComponentFixture<OneOffItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneOffItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OneOffItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
