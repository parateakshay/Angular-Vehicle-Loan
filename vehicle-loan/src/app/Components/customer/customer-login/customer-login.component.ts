import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  userForm: FormGroup;
  customers: Customer[] = [];

  specificCustomer: Customer | undefined;
  formCustomer: Customer | undefined;
  invalidLogin: boolean = false;

  constructor(fb: FormBuilder, private customerservice: CustomerService) {
    this.userForm = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
    this.getCustomers();
  }

  public getCustomers() {
    this.customerservice.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  onSubmit() {
    this.formCustomer = this.userForm.value;

    if (
      this.customers.find((x) => x.email == this.formCustomer?.email) != null
    ) {
      this.specificCustomer = this.customers.find(
        (x) => x.email == this.formCustomer?.email
      );
      if (this.specificCustomer?.password === this.formCustomer?.password) {
        this.invalidLogin = false;
        console.log('Valid Credentials');
      } else {
        this.invalidLogin = true;
        console.log('Invalid Credentials, Please try again');
      }
    } else {
      this.invalidLogin = true;
      console.log('Member not found!!');
    }
  }
}
