import { ActivatedRoute, Router } from '@angular/router';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { click } from 'src/testing';

import { Hero } from '../hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { HeroesModule } from '../heroes.module';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let expectedHero: Hero;
  let page: Page;

  class Page {
    // getter properties wait to query the DOM until called.
    get buttons() {
      return this.queryAll<HTMLButtonElement>('button');
    }
    get saveBtn() {
      return this.buttons[1];
    }
    get cancelBtn() {
      return this.buttons[0];
    }
    get nameDisplay() {
      return this.query<HTMLElement>('mat-card-title');
    }
    get nameInput() {
      return this.query<HTMLInputElement>('input');
    }

    gotoHeroes: jasmine.Spy;
    navigateSpy: jasmine.Spy;

    constructor(someFixture: ComponentFixture<HeroDetailComponent>) {
      // get the navigate spy from the injected router spy object
      const routerSpy = someFixture.debugElement.injector.get(Router) as any;
      this.navigateSpy = routerSpy.navigate;

      // spy on component's `gotoHeroes()` method
      const someComponent = someFixture.componentInstance;
      this.gotoHeroes = spyOn(someComponent, 'gotoHeroes').and.callThrough();
    }

    //// query helpers ////
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }

  /** Create the HeroDetailComponent, initialize it, set test variables  */
  function createComponent() {
    TestBed.inject(HeroService);
    TestBed.inject(ActivatedRoute);
    TestBed.inject(Router);
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    page = new Page(fixture);

    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    expectedHero = { id: 1, name: 'Test Hero', power: 'Test Power' };

    const activatedRoute = new ActivatedRouteStub({ id: expectedHero.id });
    const heroService = jasmine.createSpyObj('HeroService', [
      'getHero',
      'updateHero',
    ]);
    const h$ = cold('---x|', { x: expectedHero });
    heroService.getHero.and.returnValue(h$);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HeroesModule],
      providers: [
        { provide: HeroService, useValue: heroService },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
    createComponent();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it("should display that hero's name", () => {
    expect(page.nameDisplay.textContent).toBe(`${expectedHero.name} Details`);
  });

  it('should navigate when click cancel', () => {
    click(page.cancelBtn);
    expect(page.navigateSpy.calls.any())
      .withContext('router.navigate called')
      .toBe(true);
  });

  it('should save when click save but not navigate immediately', () => {
    // Get service injected into component and spy on its`updateHero` method.
    // It delegates to fake `HeroService.updateHero` which delivers a safe test result.
    const heroServiceSpy = fixture.debugElement.injector.get(
      HeroService
    ) as any;
    const updateHeroSpy = heroServiceSpy.updateHero;
    const hu$ = cold('---x|', { x: expectedHero });
    updateHeroSpy.and.returnValue(hu$);

    click(page.saveBtn);
    expect(updateHeroSpy.calls.any())
      .withContext('HeroService.save called')
      .toBe(true);
    expect(page.navigateSpy.calls.any())
      .withContext('router.navigate not called')
      .toBe(false);
  });

  it('should navigate when click save and save resolves', fakeAsync(() => {
    const heroServiceSpy = fixture.debugElement.injector.get(
      HeroService
    ) as any;
    const updateHeroSpy = heroServiceSpy.updateHero;
    const hu$ = cold('---x|', { x: expectedHero });
    updateHeroSpy.and.returnValue(hu$);

    click(page.saveBtn);
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(page.navigateSpy.calls.any())
      .withContext('router.navigate called')
      .toBe(true);
  }));

  it('should convert hero name to Title Case', () => {
    // get the name's input and display elements from the DOM
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
    const nameDisplay: HTMLElement =
      hostElement.querySelector('mat-card-title')!;

    // simulate user entering a new name into the input box
    nameInput.value = 'quick BROWN  fOx';

    // Dispatch a DOM event so that Angular learns of input value change.
    nameInput.dispatchEvent(new Event('input'));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(nameDisplay.textContent).toBe('Quick Brown  Fox Details');
  });
});
