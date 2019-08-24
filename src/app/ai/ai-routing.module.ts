import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  {
    path: 'ai',
    children: [
      {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(mod => mod.GameModule)
      },
      {
        path: 'robotic',
        loadChildren: () => import('./robotic/robotic.module').then(mod => mod.RoboticModule)
      },
      {
        path: 'auto-algo',
        loadChildren: () => import('./auto-algo/auto-algo.module').then(mod => mod.AutoAlgoModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
