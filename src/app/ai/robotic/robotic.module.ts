import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoboticRoutingModule } from './robotic-routing.module';
import {RoboticComponent} from './robotic.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [
    RoboticComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RoboticRoutingModule
  ]
})
export class RoboticModule { }
