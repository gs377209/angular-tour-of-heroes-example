import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    const h$ = cold('---x|', { x: [] });
    heroService.getHeroes.and.returnValue(h$);

    await TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
