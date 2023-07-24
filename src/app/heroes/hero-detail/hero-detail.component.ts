import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // unstable way if you are not reusing everywhere:
    // const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    // this.hero$ = this.heroService.getHero(id);
    // old way of doing things:
    // this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));

    this.hero$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (!id || id === '0') {
          return of({ id: 0, name: '' } as Hero);
        } else {
          return this.heroService.getHero(parseInt(id, 10));
        }
      }),
    );

    this.hero$.subscribe((hero) => {
      if (!hero) {
        this.gotoHeroes();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  gotoHeroes(hero?: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  }

  save(hero: Hero): void {
    // old way of submitting:
    // if (this.hero) {
    //   this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    // }
    if (hero) {
      this.heroService.updateHero(hero).subscribe(() => this.gotoHeroes(hero));
    }
  }
}
