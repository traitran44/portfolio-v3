import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemNetworkRoutingModule } from './system-network-routing.module';
import { OsComponent } from './os/os.component';
import { NetworkingComponent } from './networking/networking.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [OsComponent, NetworkingComponent, DatabaseComponent],
  imports: [
    CommonModule,
    SystemNetworkRoutingModule
  ],
  exports: [OsComponent, NetworkingComponent, DatabaseComponent]
})
export class SystemNetworkModule { }
