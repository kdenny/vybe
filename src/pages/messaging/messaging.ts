import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingPage');
  }

  goToChat(isNewMatch = false) {
    this.navCtrl.push(ChatPage, {isNewMatch: isNewMatch});
  }

  goToExplore() {
    this.navCtrl.push(ExplorePage, {}, {
      direction: 'back'
    });
  }

}
