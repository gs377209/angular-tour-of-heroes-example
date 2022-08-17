import { ChildrenOutletContexts } from '@angular/router';
import { Component } from '@angular/core';

import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [slideInAnimation],
})
export class HeroesComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
