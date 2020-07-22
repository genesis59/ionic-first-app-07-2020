import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularPageRoutingModule } from './angular-routing.module';

import { AngularPage } from './angular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularPageRoutingModule
  ],
  declarations: [AngularPage]
})
export class AngularPageModule {}
