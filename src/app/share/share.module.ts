import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [ContentContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContentContainerComponent
  ]
})
export class ShareModule { }
