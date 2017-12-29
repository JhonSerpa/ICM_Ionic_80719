import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule  } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrastoPage } from '../pages/crasto/crasto';
import { AlmocoCrPage } from '../pages/crasto/almocoCr/almocoCr';
import { JantarCrPage } from '../pages/crasto/jantarCr/jantarCr';
import { SantiagoPage } from '../pages/santiago/santiago';
import { AlmocoSaPage } from '../pages/santiago/almocoSa/almocoSa';
import { JantarSaPage } from '../pages/santiago/jantarSa/jantarSa';
import { EstgaPage } from '../pages/estga/estga';
import { AlmocoEsPage } from '../pages/estga/almocoEs/almocoEs';
import { JantarEsPage } from '../pages/estga/jantarEs/jantarEs';


import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrastoPage,
    AlmocoCrPage,
    JantarCrPage,
    SantiagoPage,
    AlmocoSaPage,
    JantarSaPage,
    EstgaPage,
    AlmocoEsPage,
    JantarEsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrastoPage,
    AlmocoCrPage,
    JantarCrPage,
    SantiagoPage,
    AlmocoSaPage,
    JantarSaPage,
    EstgaPage,
    AlmocoEsPage,
    JantarEsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
