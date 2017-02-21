import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DbComponent } from './db.component';
import { SignupFormComponent } from './signup-form.component';

  // Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAw-SU_Y-Vjx-IgAkF4hGq5sB-dGSYFeSU",
  authDomain: "ang2form.firebaseapp.com",
  databaseURL: "https://ang2form.firebaseio.com",
  storageBucket: "ang2form.appspot.com",
  messagingSenderId: "905651257461"
};

//database reference
//const database = firebase.database();

const routes: Routes = [
  //{ path: 'app',     component: AppComponent },
  { path: 'db',     component: DbComponent },
  { path: 'signup',  component: SignupFormComponent },
  //{ path: '', redirectTo: '/app', pathMatch: 'full' }
  //{ path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DbComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }