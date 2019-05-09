import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from './game/game.component';
import {KnowledgeBasedComponent} from './knowledge-based/knowledge-based.component';
import {RoboticComponent} from './robotic/robotic.component';
import {AutoAlgoComponent} from './auto-algo/auto-algo.component';

const routes: Routes = [
  {
    path: 'ai',
    children: [
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: 'knowledge-based',
        component: KnowledgeBasedComponent
      },
      {
        path: 'robotic',
        component: RoboticComponent
      },
      {
        path: 'auto-algo',
        component: AutoAlgoComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'knowledge-based'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
