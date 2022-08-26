import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  declarations: [AnimationsComponent, OpenCloseComponent],
  imports: [CommonModule, MatButtonModule, AnimationsRoutingModule],
})
export class AnimationsModule {}
