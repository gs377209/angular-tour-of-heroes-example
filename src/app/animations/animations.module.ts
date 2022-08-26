import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';

@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent,
    InsertRemoveComponent,
    StatusSliderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AnimationsRoutingModule,
  ],
})
export class AnimationsModule {}
