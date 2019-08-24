import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoboticComponent} from './robotic.component';

const routes: Routes = [
  {
    path: '',
    component: RoboticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoboticRoutingModule { }
