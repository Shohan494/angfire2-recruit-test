import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
//import { Subject } from 'rxjs/Subject';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  title = 'app works!';

  //admins: FirebaseObjectObservable<any>;
  //if query then we have to use lists
  admins: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
  	//this.admins = af.database.object('/admins');

  	//if query then we have to use lists
  	//query returns an array
  	this.admins = af.database.list('/admins', {
		query: 
		{
			orderByChild: 'id',
			limitToLast: 15
		}
  	});
  }

}