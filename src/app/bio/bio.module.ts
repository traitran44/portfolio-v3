import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BioRoutingModule} from './bio-routing.module';
import {IntroComponent} from './intro/intro.component';
import { ResumeComponent } from './resume/resume.component';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [IntroComponent, ResumeComponent],
  imports: [
    CommonModule,
    BioRoutingModule,
    MaterialModule,
    FlexLayoutModule,

    NgxExtendedPdfViewerModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    IntroComponent,
    ResumeComponent,
  ],
})
export class BioModule {
}
