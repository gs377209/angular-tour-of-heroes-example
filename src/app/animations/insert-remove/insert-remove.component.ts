import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-insert-remove',
    templateUrl: './insert-remove.component.html',
    styleUrls: ['./insert-remove.component.scss'],
    animations: [
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('100ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
        ]),
    ],
    standalone: false
})
export class InsertRemoveComponent {
  isShown = true;

  toggle() {
    this.isShown = !this.isShown;
  }
}
