import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//firebase
import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from '@angular/fire';

import {  AngularFirestoreModule} from "@angular/fire/firestore";
import { ComponentsModule } from './components/components.module';

//components

//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule,
    ComponentsModule
  
  ],
  providers: [InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
