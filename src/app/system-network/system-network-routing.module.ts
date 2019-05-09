import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OsComponent} from './os/os.component';
import {NetworkingComponent} from './networking/networking.component';
import {DatabaseComponent} from './database/database.component';

const routes: Routes = [
  {
    path: 'systems',
    children: [
      {
        path: 'os',
        component: OsComponent
      },
      {
        path: 'networking',
        component: NetworkingComponent
      },
      {
        path: 'database',
        component: DatabaseComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'os'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNetworkRoutingModule { }
