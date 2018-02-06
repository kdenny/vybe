import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  introSlides: any;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.introSlides = [
      {
        title: 'Meet and connect with <br> local musicians and artists',
        image: 'assets/img/intro/intro_1.png'
      },
      {
        title: 'Swipe Right to like someone <br /> or Swipe Left to pass',
        image: 'assets/img/intro/intro_2.png'
      },
      {
        title: 'If they also Swipe Right <br /> then "It\'s a Match!"',
        image: 'assets/img/intro/intro_3.png'
      },
      {
        title: 'Only people you\'ve matched <br /> with can message you',
        image: 'assets/img/intro/intro_4.png'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToSwipe() {
    //this.app.getRootNavs()[0].setRoot(ExplorePage)
    //  .then(() => {
    //    console.log('Welcome to your ExplorePage!');
    //  })
    this.navCtrl.push(ExplorePage, {}, {
      direction: 'forward'
    });
  }

}
