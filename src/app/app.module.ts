import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';
import { ImagePicker } from '@ionic-native/image-picker';

import { ExplorePage } from '../pages/explore/explore';
import { WelcomePage } from '../pages/welcome/welcome';
import { MatchedPage } from '../pages/matched/matched';
import { MePage } from '../pages/me/me';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { InstagramPhotoPage } from '../pages/instagram-photo/instagram-photo';
import { SettingsPage } from '../pages/settings/settings' ;
import { MessagingPage } from '../pages/messaging/messaging';
import { ChatPage } from '../pages/chat/chat';
import { TinderPlusPage } from '../pages/tinder-plus/tinder-plus';
import { Settings } from '../providers/providers';
//import { User } from '../providers/providers';
import { Api } from '../providers/providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { SwingModule } from 'angular2-swing';
import { ElasticModule } from 'ng-elastic';
import { SoundcloudProvider } from '../providers/soundcloud/soundcloud';

//export function provideSettings(storage: Storage) {
//  /**
//   * The Settings provider takes a set of default settings for your app.
//   *
//   * You can add new settings options at any time. Once the settings are saved,
//   * these values will not overwrite the saved values (this can be done manually if desired).
//   */
//  return new Settings(storage, {
//    option1: true,
//    option2: 'Ionitron J. Framework',
//    option3: '3',
//    option4: 'Hello'
//  });
//}

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    WelcomePage,
    MatchedPage,
    MePage,
    ProfilePage,
    ProfileEditPage,
    InstagramPhotoPage,
    SettingsPage,
    MessagingPage,
    ChatPage,
    TinderPlusPage
  ],
  imports: [
    BrowserModule,
    SwingModule,
    ElasticModule,
    DirectivesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',// TODO: to have same iOS look for all platforms
      backButtonText: '',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    WelcomePage,
    MatchedPage,
    MePage,
    ProfilePage,
    ProfileEditPage,
    InstagramPhotoPage,
    SettingsPage,
    MessagingPage,
    ChatPage,
    TinderPlusPage
  ],
  providers: [
    Api,
    //User,
    StatusBar,
    SplashScreen,
    Keyboard,
    ImagePicker,
    //{ provide: Settings, useFactory: provideSettings, deps: [Storage] },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SoundcloudProvider
  ]
})
export class AppModule {}
