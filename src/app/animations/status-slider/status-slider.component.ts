import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-slider',
  templateUrl: 'status-slider.component.html',
  styleUrls: ['status-slider.component.scss'],
  animations: [
    trigger('slideStatus', [
      state('inactive', style({ backgroundColor: 'blue' })),
      state('active', style({ backgroundColor: '#754600' })),
      transition('* => active', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'blue', offset: 0 }),
            style({ backgroundColor: 'red', offset: 0.8 }),
            style({ backgroundColor: '#754600', offset: 1.0 }),
          ]),
        ),
      ]),
      transition('* => inactive', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: '#754600', offset: 0 }),
            style({ backgroundColor: 'red', offset: 0.2 }),
            style({ backgroundColor: 'blue', offset: 1.0 }),
          ]),
        ),
      ]),
      transition('* => active', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'blue' }),
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'orange' }),
          ]),
        ),
      ]),
    ]),
  ],
  standalone: false,
})
export class StatusSliderComponent {
  status: 'active' | 'inactive' = 'inactive';

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
}
