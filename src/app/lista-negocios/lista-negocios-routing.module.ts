import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNegociosPage } from './lista-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNegociosPageRoutingModule {}
