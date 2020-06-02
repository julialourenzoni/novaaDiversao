import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotallySpiesPage } from './totally-spies.page';

const routes: Routes = [
  {
    path: '',
    component: TotallySpiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotallySpiesPageRoutingModule {}
