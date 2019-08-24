import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [ContentContainerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ContentContainerComponent,
    MaterialModule
  ]
})
export class ShareModule { }
