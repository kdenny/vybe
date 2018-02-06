import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  isNewMatch: boolean = false;
  messages: any[] = [];
  typingMessage: string = '';
  showGiphy: boolean = false;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isNewMatch = this.navParams.get('isNewMatch');
    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.scrollBottom();
  }

  init() {
    // TODO: can be an API response
    if (!this.isNewMatch) {
      this.messages = [
        {
          isMe: true,
          type: 'image',// text || image
          body: 'https://media.giphy.com/media/3oz8xSjBmD1ZyELqW4/giphy.gif',
          timestamp: 'Oct 10, 2017 9:47am'
        },
        {
          isMe: false,
          avatar: 'assets/img/hieu.png',
          type: 'text',// text || image
          body: 'Hey yo what\'s up?',
          timestamp: 'Oct 10, 2017 9:48am'
        },
        {
          isMe: true,
          type: 'image',// text || image
          body: 'https://media.giphy.com/media/lXiRyZVS9B79r2YOQ/giphy.gif',
          timestamp: 'Oct 10, 2017 9:50am'
        },
        {
          isMe: false,
          avatar: 'assets/img/hieu.png',
          type: 'image',// text || image
          body: 'https://media.giphy.com/media/JUMLTR3dHEGpW/giphy.gif',
          timestamp: 'Oct 10, 2017 9:52am'
        },
        {
          isMe: true,
          type: 'text',// text || image
          body: 'Where are you, buddy?',
          timestamp: 'Oct 10, 2017 9:53am'
        },
        {
          isMe: false,
          avatar: 'assets/img/hieu.png',
          type: 'text',// text || image
          body: 'I\'m almost there',
          timestamp: 'Oct 10, 2017 9:53am'
        }
      ];
    }
  }

  sendGif(imageUrl) {
    this.messages.push({
      isMe: true,
      type: 'image',
      body: imageUrl,
      timestamp: 'Oct 13, 2017 9:53am'
    });
    this.scrollBottom();

    this.fakeReply();
  }

  sendText() {
    this.messages.push({
      isMe: true,
      type: 'text',
      body: this.typingMessage,
      timestamp: 'Oct 13, 2017 9:55am'
    });
    this.typingMessage = '';
    this.scrollBottom();

    this.fakeReply();
  }

  fakeReply() {
    setTimeout(() => {
      this.messages.push({
        isMe: false,
        avatar: 'assets/img/hieu.png',
        type: 'text',
        body: 'Nice. Keep typing dude',
        timestamp: 'Oct 10, 2017 9:55am'
      });

      this.scrollBottom();
    }, 500);
  }

  scrollBottom() {
    this.content.resize();
    this.content.scrollTo(0, this.content.scrollHeight, 350);
  }

  toggleGiphy() {
    this.showGiphy = !this.showGiphy;
    this.content.resize();
  }

}
