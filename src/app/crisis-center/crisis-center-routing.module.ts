import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CanDeactivateGuard } from '../can-deactivate.guard';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
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
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService,
            },
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
