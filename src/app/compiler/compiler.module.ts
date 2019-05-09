import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompilerRoutingModule } from './compiler-routing.module';
import { MipsCompilerComponent } from './mips-compiler/mips-compiler.component';
import { CompilerResearchComponent } from './compiler-research/compiler-research.component';

@NgModule({
  declarations: [MipsCompilerComponent, CompilerResearchComponent],
  imports: [
    CommonModule,
    CompilerRoutingModule
  ],
  exports: [MipsCompilerComponent, CompilerResearchComponent]
})
export class CompilerModule { }
