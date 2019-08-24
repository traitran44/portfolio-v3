import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoAlgoComponent} from './auto-algo.component';

const routes: Routes = [
  {
    path: '',
    component: AutoAlgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoAlgoRoutingModule { }
