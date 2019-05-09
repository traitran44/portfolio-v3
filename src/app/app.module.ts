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

    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
