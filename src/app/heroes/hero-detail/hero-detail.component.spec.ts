import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { asyncData } from 'src/testing/async-observable-helpers';

import { Hero } from '../hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let expectedHero: Hero;

  beforeEach(async () => {
    expectedHero = { id: 1, name: 'Test Hero', power: 'Test Power' };
    const activatedRoute = {
      snapshot: {
        paramMap: {
          get: () => expectedHero.id,
        },
      },
    };
    const heroService = jasmine.createSpyObj('HeroService', ['getHero']);
    heroService.getHero.and.returnValue(asyncData(expectedHero));

    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroService, useValue: heroService },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
