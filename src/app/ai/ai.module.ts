import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AiRoutingModule} from './ai-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareModule,
    AiRoutingModule
  ],
  exports: []
})
export class AiModule {
}
