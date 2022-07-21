import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsSkipLinkComponent } from './ids-skip-link.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '', 
    component: IdsSkipLinkComponent 
  },
  { 
    path: 'example', 
    component: ExampleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsSkipLinkRoutingModule { }
