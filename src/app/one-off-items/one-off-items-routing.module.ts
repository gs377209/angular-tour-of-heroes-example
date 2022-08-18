import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddressFormComponent } from './address-form/address-form.component';
import { DashComponent } from './dash/dash.component';
import { DirectivesComponent } from './directives/directives.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { OneOffItemsComponent } from './one-off-items/one-off-items.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

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
      {
        path: 'table',
        title: 'Table',
        component: TableComponent,
      },
      {
        path: 'tree',
        title: 'Tree',
        component: TreeComponent,
      },
      {
        path: 'drag-drop',
        title: 'Drag Drop',
        component: DragDropComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneOffItemsRoutingModule {}
