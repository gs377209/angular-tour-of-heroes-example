import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async () => {
    const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    const h$ = cold('---x|', { x: [] });
    heroService.getHeroes.and.returnValue(h$);
    const activatedRoute = new ActivatedRouteStub({ id: '1' });

    await TestBed.configureTestingModule({
      declarations: [HeroListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: HeroService, useValue: heroService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
});
