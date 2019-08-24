import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoAlgoRoutingModule } from './auto-algo-routing.module';
import {AutoAlgoComponent} from './auto-algo.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [
    AutoAlgoComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    AutoAlgoRoutingModule
  ]
})
export class AutoAlgoModule { }
