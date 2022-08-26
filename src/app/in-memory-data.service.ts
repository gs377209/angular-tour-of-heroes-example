import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { CRISES } from './crisis-center/mock-crises';
import { Crisis } from './crisis-center/crisis';
import { HEROES } from './heroes/mock-heros';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
    // not used
  }

  createDb() {
    const heroes = HEROES;
    const crises = CRISES;
    return { heroes, crises };
  }

  // Overrides the genId method to ensure that an item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // item id + 1.
  genId(items: Hero[] | Crisis[]): number {
    return items.length > 0
      ? Math.max(...items.map((item) => item.id)) + 1
      : 11;
  }
}
