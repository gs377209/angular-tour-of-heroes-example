import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AnimationsComponent } from './animations.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    title: 'Animations',
    children: [
      {
        path: 'open-close',
        component: OpenCloseComponent,
        title: 'Open/ Close Animation',
      },
      {
        path: 'insert-remove',
        component: InsertRemoveComponent,
        title: 'Insert/Remove Animation',
      },
      {
        path: 'status-slider',
        component: StatusSliderComponent,
        title: 'Status Slider Animation',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationsRoutingModule {}
