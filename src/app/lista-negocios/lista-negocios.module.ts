import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNegociosPageRoutingModule } from './lista-negocios-routing.module';

import { ListaNegociosPage } from './lista-negocios.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNegociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaNegociosPage]
})
export class ListaNegociosPageModule {}
