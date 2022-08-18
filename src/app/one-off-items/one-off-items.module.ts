import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule } from '@angular/core';

import { AddressFormComponent } from './address-form/address-form.component';
import { DashComponent } from './dash/dash.component';
import { DirectivesComponent } from './directives/directives.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HighlightDirective } from './highlight.directive';
import { OneOffItemsComponent } from './one-off-items/one-off-items.component';
import { OneOffItemsRoutingModule } from './one-off-items-routing.module';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    UnlessDirective,
    DirectivesComponent,
    AddressFormComponent,
    DashComponent,
    OneOffItemsComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    OneOffItemsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
  ],
})
export class OneOffItemsModule {}
