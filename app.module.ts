import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesProvider } from '../providers/quotes/quotes';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule} from '@ionic/storage';
import { FlagsProvider } from '../providers/flags/flags';
import { PlayersProvider } from '../providers/players/players';
import { CountriesProvider } from '../providers/countries/countries';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SettingsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesProvider,
    FlagsProvider,
    PlayersProvider,
    CountriesProvider
  ]
})
export class AppModule {}
