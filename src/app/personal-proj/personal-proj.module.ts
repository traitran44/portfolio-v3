import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalProjRoutingModule } from './personal-proj-routing.module';
import { BuzzcourseComponent } from './buzzcourse/buzzcourse.component';
import { DatascapeComponent } from './datascape/datascape.component';
import { PhilanthropicComponent } from './philanthropic/philanthropic.component';

@NgModule({
  declarations: [BuzzcourseComponent, DatascapeComponent, PhilanthropicComponent],
  imports: [
    CommonModule,
    PersonalProjRoutingModule
  ],
  exports: [BuzzcourseComponent, DatascapeComponent, PhilanthropicComponent]
})
export class PersonalProjModule { }
