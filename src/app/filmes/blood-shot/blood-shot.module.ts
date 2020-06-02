import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodShotPageRoutingModule } from './blood-shot-routing.module';

import { BloodShotPage } from './blood-shot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodShotPageRoutingModule
  ],
  declarations: [BloodShotPage]
})
export class BloodShotPageModule {}
