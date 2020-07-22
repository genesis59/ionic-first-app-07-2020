import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularPage } from './angular.page';

const routes: Routes = [
  {
    path: '',
    component: AngularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularPageRoutingModule {}
