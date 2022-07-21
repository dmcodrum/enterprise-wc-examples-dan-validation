import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsMenuButtonRoutingModule } from './ids-menu-button-routing.module';
import { IdsMenuButtonComponent } from './ids-menu-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { DisplaySelectedComponent } from './demos/display-selected/display-selected.component';


@NgModule({
  declarations: [
    IdsMenuButtonComponent,
    ExampleComponent,
    DisabledComponent,
    DisplaySelectedComponent
  ],
  imports: [
    CommonModule,
    IdsMenuButtonRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsMenuButtonModule { }
