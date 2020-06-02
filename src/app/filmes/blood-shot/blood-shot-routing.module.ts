import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodShotPage } from './blood-shot.page';

const routes: Routes = [
  {
    path: '',
    component: BloodShotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodShotPageRoutingModule {}
