import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bio'
  },
  {
    path: 'bio',
    loadChildren: './bio/bio.module#BioModule'
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  {
    path: 'ai',
    loadChildren: './ai/ai.module#AiModule'
  },
  {
    path: 'compiler',
    loadChildren: './compiler/compiler.module#CompilerModule'
  },
  {
    path: 'systems',
    loadChildren: './system-network/system-network.module#SystemNetworkModule'
  },
  {
    path: 'personal',
    loadChildren: './personal-proj/personal-proj.module#PersonalProjModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
