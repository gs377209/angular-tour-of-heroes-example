import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    CrisisCenterRoutingModule,
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
})
export class CrisisCenterModule {}
