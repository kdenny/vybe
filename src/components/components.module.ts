import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { DemoAvatarComponent } from './demo-avatar/demo-avatar';
import { GiphyComponent } from './giphy/giphy';
import { NlbrPipe } from './giphy/nlbr.pipe';

@NgModule({
	declarations: [
    DemoAvatarComponent,
		GiphyComponent,
		NlbrPipe
	],
	imports: [
		HttpModule,
		IonicModule
	],
	entryComponents: [
		DemoAvatarComponent,
		GiphyComponent
	],
	exports: [
    DemoAvatarComponent,
		GiphyComponent,
		NlbrPipe
	]
})
export class ComponentsModule {}
