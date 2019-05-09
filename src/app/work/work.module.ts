import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { MacysComponent } from './macys/macys.component';

@NgModule({
  declarations: [MacysComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  exports: [MacysComponent]
})
export class WorkModule { }
