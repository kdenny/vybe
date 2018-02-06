import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { SettingsPage } from '../settings/settings';
import { TinderPlusPage } from '../tinder-plus/tinder-plus';

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  @ViewChild(Slides) slides: Slides;
  currentSlideIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
    // this.openProfileEdit();// TODO
  }

  slideChanged() {
    this.currentSlideIndex = this.slides.getActiveIndex();
  }

  goToExplore() {
    this.navCtrl.push(ExplorePage, {}, {
      direction: 'forward'
    });
  }

  openProfile() {
    let modal = this.modalCtrl.create(ProfilePage);
    modal.present();
  }

  openProfileEdit() {
    let modal = this.modalCtrl.create(ProfileEditPage);
    modal.present();
  }

  openSettings() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  }

  openTinderPlus() {
    let modal = this.modalCtrl.create(TinderPlusPage);
    modal.present();
  }

}
