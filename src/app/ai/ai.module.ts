import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { KnowledgeBasedComponent } from './knowledge-based/knowledge-based.component';
import { GameComponent } from './game/game.component';
import { RoboticComponent } from './robotic/robotic.component';
import { AutoAlgoComponent } from './auto-algo/auto-algo.component';

@NgModule({
  declarations: [KnowledgeBasedComponent, GameComponent, RoboticComponent, AutoAlgoComponent],
  imports: [
    CommonModule,
    AiRoutingModule
  ],
  exports: [KnowledgeBasedComponent, GameComponent, RoboticComponent, AutoAlgoComponent]
})
export class AiModule { }
