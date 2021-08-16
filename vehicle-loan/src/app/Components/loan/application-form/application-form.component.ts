import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer/customer';
import { CheckEligibility } from '../CheckEligibility';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent implements OnInit {
  customerEmailsession: any = window.sessionStorage.getItem(
    'customerEmailSession'
  );
  customer: Customer = new Customer();
  vehicle: Vehicle = {
    customerId: 0,
    vehicleMaker: '',
    vehicleModel: '',
    vehiclePrice: 0,
    vehicleExShowroomPrice: 0,
  };
  checkEligibity: CheckEligibility = new CheckEligibility(
    this.customer,
    '',
    1000,
    '',
    '',
    '',
    '',
    ''
  );
  data: any;

  checkEligibilityForm = new FormGroup({
    carmaker: new FormControl(null, Validators.required),
    carmodel: new FormControl(null, Validators.required),
    exshowroomprice: new FormControl(null, [
      Validators.required,
      Validators.min(50000),
    ]),
    onroadprice: new FormControl(null, [
      Validators.required,
      Validators.min(50000),
    ]),
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    gender: new FormControl(null),
    typeofemployement: new FormControl(),
    yearlysalary: new FormControl(null, [
      Validators.required,
      Validators.min(100000),
    ]),
    existingemi: new FormControl(),
    mobilenumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  customerId: number = 0;
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: number = 0;
  customerAge: number = 0;
  date = new Date();
  year = this.date.getFullYear();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomerByEmail(this.customerEmailsession)
      .subscribe((data) => {
        console.log(data);
        this.customerName = data['customerName'];
        this.customerId = data['customerId'];
        this.customerEmail = data['customerEmail'];
        this.customerPhone = data['customerPhone'];
        let temp_age = String(data['dob']);
        this.customerAge = this.year - parseInt(temp_age.substring(0, 4));
        // console.log(this.customerAge)
        this.checkEligibity.customer = data;
        // console.log(this.checkEligibity.customer)
      });
  }
  onSubmit() {
    this.vehicle.customerId = this.customerId;
    this.vehicle.vehicleMaker = this.checkEligibilityForm.value.carmaker;
    this.vehicle.vehicleModel = this.checkEligibilityForm.value.carmodel;
    this.vehicle.vehiclePrice = this.checkEligibilityForm.value.onroadprice;
    this.vehicle.vehicleExShowroomPrice =
      this.checkEligibilityForm.value.exshowroomprice;

    this.customerService.checkEligibility(this.vehicle).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );

    this.checkEligibity.customerEmployment =
      this.checkEligibilityForm.value.typeofemployement;
    this.checkEligibity.existingEmi =
      this.checkEligibilityForm.value.existingemi;
    this.checkEligibity.annualSalary =
      this.checkEligibilityForm.value.yearlysalary;

    this.customerService.registerEligibility(this.checkEligibity).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    // console.log(this.checkEligibity)
    this.router.navigateByUrl('/loan-offer');
  }
}