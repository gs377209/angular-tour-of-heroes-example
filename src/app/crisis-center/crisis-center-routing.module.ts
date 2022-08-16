import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    title: 'Crisis Center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        title: 'Crises',
        children: [
          {
            path: ':id',
            title: 'Crisis Detail',
            component: CrisisDetailComponent,
          },
          {
            path: '',
            title: 'Crisis Home',
            component: CrisisCenterHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
