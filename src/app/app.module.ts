import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';

  // Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAw-SU_Y-Vjx-IgAkF4hGq5sB-dGSYFeSU",
  authDomain: "ang2form.firebaseapp.com",
  databaseURL: "https://ang2form.firebaseio.com",
  storageBucket: "ang2form.appspot.com",
  messagingSenderId: "905651257461"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
