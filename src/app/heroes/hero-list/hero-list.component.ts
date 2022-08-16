import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // old way of getting things:
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id') ?? '', 10);
        return this.heroService.getHeroes();
      })
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(() => {
      // old way of quickly updating
      // this.heroes.push(hero);
      this.getHeroes();
    });
  }

  delete(hero: Hero): void {
    // old way of quickly updating
    // this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.getHeroes();
    });
  }
}
