import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BioRoutingModule} from './bio-routing.module';
import {IntroComponent} from './intro/intro.component';
import { ResumeComponent } from './resume/resume.component';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [IntroComponent, ResumeComponent],
  imports: [
    CommonModule,
    BioRoutingModule,
    MaterialModule,
  ],
  exports: [
    IntroComponent,
    ResumeComponent,
  ],
})
export class BioModule {
}
