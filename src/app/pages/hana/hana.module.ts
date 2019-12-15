import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HanaPageRoutingModule } from './hana-routing.module';

import { HanaPage } from './hana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HanaPageRoutingModule
  ],
  declarations: [HanaPage]
})
export class HanaPageModule {}
