import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [
  {
    path: 'bio',
    children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intro'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule { }
