import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MipsCompilerComponent} from './mips-compiler/mips-compiler.component';
import {CompilerResearchComponent} from './compiler-research/compiler-research.component';

const routes: Routes = [
  {
    path: 'compiler',
    children: [
      {
        path: 'mips',
        component: MipsCompilerComponent
      },
      {
        path: 'research',
        component: CompilerResearchComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mips'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompilerRoutingModule {
}
