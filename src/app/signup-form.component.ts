import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';

import { ActivatedRoute }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'signup-form',
  templateUrl: 'signup-form.component.html'
})

export class SignupFormComponent implements OnInit {
  user: FormGroup;

  constructor(
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

  goBack(): void {
  	this.location.back();
	}
}