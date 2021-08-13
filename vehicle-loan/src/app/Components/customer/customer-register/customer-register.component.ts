import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
})
export class CustomerRegisterComponent implements OnInit {
  myReactiveForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      'phone number': new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      'security question': new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
