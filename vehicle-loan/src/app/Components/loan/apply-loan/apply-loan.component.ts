import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css'],
})
export class ApplyLoanComponent implements OnInit {
  myReactiveForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      carmaker: new FormControl(null),
      carmodel: new FormControl(null),
      'ex-showroom-price': new FormControl(null),
      'on-road-price': new FormControl(null),
      name: new FormControl(null),
      gender: new FormControl(null),
      'type-of-employement': new FormControl(null),
      'yearly-salary': new FormControl(null),
      'existing-emi': new FormControl(null),
      'mobile-number': new FormControl(null),
      email: new FormControl(null),
    });
  }
}
