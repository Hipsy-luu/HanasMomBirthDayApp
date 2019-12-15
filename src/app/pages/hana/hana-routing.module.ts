import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HanaPage } from './hana.page';

const routes: Routes = [
  {
    path: '',
    component: HanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HanaPageRoutingModule {}
