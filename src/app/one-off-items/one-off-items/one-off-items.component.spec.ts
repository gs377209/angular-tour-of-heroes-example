import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { OneOffItemsModule } from '../one-off-items.module';

import { OneOffItemsComponent } from './one-off-items.component';

describe('OneOffItemsComponent', () => {
  let component: OneOffItemsComponent;
  let fixture: ComponentFixture<OneOffItemsComponent>;

  beforeEach(async () => {
    const activatedRoute = new ActivatedRouteStub({ id: '1' });

    await TestBed.configureTestingModule({
      imports: [OneOffItemsModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(OneOffItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
