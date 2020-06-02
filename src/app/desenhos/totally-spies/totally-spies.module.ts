import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotallySpiesPageRoutingModule } from './totally-spies-routing.module';

import { TotallySpiesPage } from './totally-spies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotallySpiesPageRoutingModule
  ],
  declarations: [TotallySpiesPage]
})
export class TotallySpiesPageModule {}
