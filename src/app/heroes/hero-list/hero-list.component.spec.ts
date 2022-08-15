import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { asyncData } from 'src/testing/async-observable-helpers';

import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async () => {
    const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    heroService.getHeroes.and.returnValue(asyncData([]));

    await TestBed.configureTestingModule({
      declarations: [HeroListComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
});
