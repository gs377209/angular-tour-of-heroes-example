import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddressFormComponent } from './address-form/address-form.component';
import { DashComponent } from './dash/dash.component';
import { DirectivesComponent } from './directives/directives.component';
import { OneOffItemsComponent } from './one-off-items/one-off-items.component';

const routes: Routes = [
  {
    path: '',
    title: 'One Off Items',
    component: OneOffItemsComponent,
    children: [
      {
        path: 'shipping-address-form',
        title: 'Shipping Address Form',
        component: AddressFormComponent,
      },
      {
        path: 'fun-dashboard-example',
        title: 'Fun Dashboard',
        component: DashComponent,
      },
      {
        path: 'directives',
        title: 'Directives',
        component: DirectivesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneOffItemsRoutingModule {}
