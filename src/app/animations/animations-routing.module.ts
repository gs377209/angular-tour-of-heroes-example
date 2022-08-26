import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AnimationsComponent } from './animations.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    title: 'Animations',
    children: [
      {
        path: '',
        component: OpenCloseComponent,
        title: 'Open Close Animation',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationsRoutingModule {}
