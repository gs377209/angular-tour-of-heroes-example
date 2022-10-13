import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddressFormComponent } from './address-form/address-form.component';
import { DashComponent } from './dash/dash.component';
import { DirectivesComponent } from './directives/directives.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';
import { OneOffItemsComponent } from './one-off-items/one-off-items.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    title: 'One Off Items',
    component: OneOffItemsComponent,
    data: { animation: 'oneOffItems' },
    children: [
      {
        path: 'shipping-address-form',
        title: 'Shipping Address Form',
        component: AddressFormComponent,
        data: { animation: 'shippingAddress' },
      },
      {
        path: 'fun-dashboard-example',
        title: 'Fun Dashboard',
        component: DashComponent,
        data: { animation: 'funDashboard' },
      },
      {
        path: 'directives',
        title: 'Directives',
        component: DirectivesComponent,
        data: { animation: 'directives' },
      },
      {
        path: 'table',
        title: 'Table',
        component: TableComponent,
        data: { animation: 'superheroes' },
      },
      {
        path: 'tree',
        title: 'Tree',
        component: TreeComponent,
        data: { animation: 'tree' },
      },
      {
        path: 'drag-drop',
        title: 'Drag Drop',
        component: DragDropComponent,
        data: { animation: 'dragDrop' },
      },
      {
        path: 'dynamic-form',
        title: 'Dynamic Form',
        component: DynamicFormExampleComponent,
        data: { animation: 'dynamicForm' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneOffItemsRoutingModule {}
