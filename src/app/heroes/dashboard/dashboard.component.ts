import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  today = new Date();
  minutes = 2;
  amount = 9999.99;
  logo = 'assets/icons/icon-128x128.png';
  translated = $localize`:basic text|A sample translation:Hello!`;
  translatedWithVar = '';
  gender = 'n/a';

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    const person = 'Gerrod';
    this.translatedWithVar = $localize`Hello ${person}!`;
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
