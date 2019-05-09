import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MacysComponent} from './macys/macys.component';

const routes: Routes = [
  {
    path: 'work',
    children: [
      {
        path: 'macy-exp',
        component: MacysComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'macy-exp'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
