import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // alternate:
    // canMatch: [AuthGuard],
    canActivate: [AuthGuard],
    data: { animation: 'admin' },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        data: { animation: 'admin' },
        children: [
          {
            path: 'crises',
            component: ManageCrisesComponent,
            data: { animation: 'crises' },
          },
          {
            path: 'heroes',
            component: ManageHeroesComponent,
            data: { animation: 'heroes' },
          },
          {
            path: '',
            component: AdminDashboardComponent,
            data: { animation: 'admin' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
