import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BioModule} from './bio/bio.module';
import {WorkModule} from './work/work.module';
import {AiModule} from './ai/ai.module';
import {CompilerModule} from './compiler/compiler.module';
import {SystemNetworkModule} from './system-network/system-network.module';
import {PersonalProjModule} from './personal-proj/personal-proj.module';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    CompilerModule,
    WorkModule,
    BioModule,
    AiModule,
    SystemNetworkModule,
    PersonalProjModule,

    PerfectScrollbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
