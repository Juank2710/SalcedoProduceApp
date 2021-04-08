import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNegociosPageRoutingModule } from './lista-negocios-routing.module';

import { ListaNegociosPage } from './lista-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNegociosPageRoutingModule
  ],
  declarations: [ListaNegociosPage]
})
export class ListaNegociosPageModule {}
