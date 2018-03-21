/*
  Reference: [How To Build Ionic Tinder Cards Using Angular 2 Swing](https://devdactic.com/ionic-2-tinder-cards)
*/

import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/Rx';
import * as _ from 'lodash';

import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

import { MatchedPage } from '../matched/matched';
import { MePage } from '../me/me';
import { MessagingPage } from '../messaging/messaging';
import { ProfilePage } from '../profile/profile';
import { Api } from '../../providers/api/api'

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  @ViewChild('cardStack') swingStack: SwingStackComponent;
  @ViewChildren('card') swingCards: QueryList<SwingCardComponent>;

  cards: any[];
  stackConfig: StackConfig;
  users: any[];
  isLoading: boolean = true;
  imgUrl;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private api: Api) {
    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [
        Direction.LEFT,
        Direction.RIGHT
      ],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    console.log("Exploring")
    this.getArtists();
    this.cards = [];
    this.imgUrl = 'assets/img/deezy.png';

  }
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    let nope = element.querySelector('.stamp-nope');
    let like = element.querySelector('.stamp-like');
    let caculatedValue = Math.min(100, Math.abs(x) - 20) / 100;// 0 - 1

    if (x < 0 && Math.abs(x) > 20) {
      nope.style.opacity = caculatedValue;
    } else {
      like.style.opacity = caculatedValue;
    }

    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;

    // Zoom effect for the cards underneath
    console.log(this.swingCards.toArray())
    let cardBehind = this.swingCards.toArray()[1].getNativeElement();
    cardBehind.style['transform'] = `scale(${0.94 + 0.06 * caculatedValue}, ${0.94 + 0.06 * caculatedValue})`;
  }

  getArtists() {
    console.log("Getting artists")
    this.api.getArtists().then(a => {
        console.log(a)
        this.isLoading = false;
        this.users = a;
        this.addNewCard();
        this.addNewCard();
      })
  }

  addNewCard() {
    //console.log("Adding new card")
    //let difference = _.difference(this.users, this.cards);
    //
    //console.log("Adding new card")
    //if (difference) {
    //  this.cards.push(difference[randomIndex]);
    //}
    //
    //else {
    //  this.isLoading = true;
    //  this.getArtists();
    //  //this.addNewCard();
    //}
    let randomIndex = Math.floor(Math.random() * (this.users.length));
    this.cards.push(this.users[randomIndex])

    console.info('CURRENT STACK:', this.cards.map(c => c.name));
  }

  disliked() {
    this.addNewCard();
    let removedCard = this.cards.shift();

    console.log('You disliked: ' + removedCard.name);
  }

  liked() {
    this.addNewCard();
    let removedCard = this.cards.shift();
    this.checkMatching(removedCard);

    console.log('You liked: ' + removedCard.name);
  }

  checkMatching(card) {
    if (card.name == 'Hieu Pham') {
      let modal = this.modalCtrl.create(MatchedPage);
      modal.present();
    }
  }

  goToMe() {
    this.navCtrl.push(MePage, {}, {
      direction: 'back'
    });
  }

  goToMessaging() {
    this.navCtrl.push(MessagingPage, {}, {
      direction: 'forward'
    });
  }

  openProfile(isMe) {
    let modal = this.modalCtrl.create(ProfilePage, {isMe: isMe});
    modal.present();
  }

  getMoreCards() {
    if (this.cards.length == 0) {
      this.addNewCard();
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
