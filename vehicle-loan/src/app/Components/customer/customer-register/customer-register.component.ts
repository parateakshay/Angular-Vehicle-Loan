import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
})
export class CustomerRegisterComponent implements OnInit {
  myReactiveForm: FormGroup = new FormGroup({});
  customer:Customer = new Customer();
  constructor(private customerService:CustomerService, private router:Router) {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      Address: new FormControl(null,Validators.required),
      dob: new FormControl(null, Validators.required),
      securityQuestion: new FormControl(null, Validators.required),
    });
  }
 
  onSubmit() {
    this.customer.customerEmail = this.myReactiveForm.value.email;
    this.customer.customerPassword = this.myReactiveForm.value.password;
    this.customer.customerName = this.myReactiveForm.value.name;
    this.customer.customerPhone = this.myReactiveForm.value.phoneNumber;
    this.customer.address = this.myReactiveForm.value.Address;
    this.customer.dob = this.myReactiveForm.value.dob;
    this.customerService.registerCustomer(this.customer)
    .subscribe(data =>console.log(data),error =>console.log(error));
   
    console.log("customer added"+this.customer)
    console.log(this.customer);
    this.router.navigateByUrl('/login')
  }
}
