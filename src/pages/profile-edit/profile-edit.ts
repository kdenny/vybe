import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

/**
  REMEMBER: Install ImagePicker plugin first (https://ionicframework.com/docs/native/image-picker/)
 */

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {
  profileImages: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public imagePicker: ImagePicker,
    public app: App ) {
      this.profileImages = [
        'assets/img/hieu.png',
        'assets/img/hieu.png',
        'assets/img/hieu.png',
        'assets/img/hieu.png',
        'assets/img/hieu.png',
        ''
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  openPhotoPicker(index) {
    this.imagePicker.getPictures({ maximumImagesCount: 1 })
      .then((results) => {
        this.profileImages[index] = results[0];
      }, (err) => { });
  }

  removeImage(index) {
    this.profileImages[index] = '';
  }

}
