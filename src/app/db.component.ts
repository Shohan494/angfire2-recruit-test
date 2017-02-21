import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
//import { Subject } from 'rxjs/Subject';

import { ActivatedRoute }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({

  selector: 'my-db',
  templateUrl: 'db.component.html',
  styleUrls: ['app.component.css']
})
export class DbComponent {
  
  title = 'app works!';

  //admins: FirebaseObjectObservable<any>;
  //if query then we have to use lists
  admins: FirebaseListObservable<any[]>;

  constructor( 
  	private route: ActivatedRoute,
    private location: Location,
    af: AngularFire) 
  	{
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
  goBack(): void {
  	this.location.back();
  }

}