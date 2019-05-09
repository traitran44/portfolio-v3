import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BuzzcourseComponent} from './buzzcourse/buzzcourse.component';
import {DatascapeComponent} from './datascape/datascape.component';
import {PhilanthropicComponent} from './philanthropic/philanthropic.component';

const routes: Routes = [
  {
    path: 'personal',
    children: [
      {
        path: 'buzzcourse',
        component: BuzzcourseComponent
      },
      {
        path: 'datascape',
        component: DatascapeComponent
      },
      {
        path: 'philanthropic',
        component: PhilanthropicComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buzzcourse'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalProjRoutingModule {
}
