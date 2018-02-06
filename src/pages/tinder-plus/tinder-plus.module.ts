import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TinderPlusPage } from './tinder-plus';

@NgModule({
  declarations: [
    TinderPlusPage,
  ],
  imports: [
    IonicPageModule.forChild(TinderPlusPage),
  ],
})
export class TinderPlusPageModule {}
