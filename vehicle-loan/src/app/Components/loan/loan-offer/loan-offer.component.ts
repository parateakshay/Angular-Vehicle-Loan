import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer/customer';
import { Bank } from '../Bank';
import { Loan } from '../Loan';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent implements OnInit {
  customerEmailsession:any = window.sessionStorage.getItem('customerEmailSession');
  customer:Customer = new Customer;
  vehicle:Vehicle = {customerId:0,vehicleMaker:"",vehicleModel:"",vehiclePrice:0,vehicleExShowroomPrice:0}
  loan:Loan = new Loan()
  bank:Bank = new Bank;
  P:number=0;
  R:number=0;
  n:number=0;
  EMI:number=0;
  interestPayable=0;
  show:boolean=false;

  loanOfferForm = new FormGroup({
      loanAmount: new FormControl(null,Validators.required),
      interestRate: new FormControl(9.5,Validators.required),
      timePeriod: new FormControl(12,Validators.required)


  });

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.customerService.getCustomerByEmail(this.customerEmailsession).subscribe(
      data=>
      {
        this.customer = data
        // console.log("customer details")
        // console.log(data)
        this.customerService.getVehicleDetails(data['customerId']).subscribe(
          data1=>
          {
            this.vehicle = data1;
            // console.log("vehicle details")
            // console.log(data1)
            
            this.customerService.getBankDetails().subscribe(
              bankData=>
              {
               this.bank = bankData;
                // console.log("Bank details")
                // console.log(bankData)
                this.loan.bank = this.bank
                this.loan.customer = this.customer
                this.loan.vehicle = this.vehicle
                console.log(this.loan)
              })
  
          })
          

      })
  }

  calculate(){
    
    console.log("EMI");
    console.log(this.loanOfferForm.get("loanAmount")?.value);
    console.log(this.loanOfferForm.get("interestRate")?.value);
    console.log(this.loanOfferForm.get("timePeriod")?.value);

    

    this.P=this.loanOfferForm.get("loanAmount")?.value
    this.R=this.loanOfferForm.get("interestRate")?.value/1200
    this.n=this.loanOfferForm.get("timePeriod")?.value

    this.EMI=  (this.P*this.R) * (((1+this.R)*this.n)/ (((1+this.R)*this.n)-1))

    this.interestPayable= ((this.EMI*this.n)-this.P)

    console.log( this.EMI  )

    this.show=true;
    
  }
  submit()
  {
    this.loan.loanStatus = "Waiting";
    this.loan.loanTenure = this.loanOfferForm.value.timePeriod
    this.loan.loanAmount = this.loanOfferForm.value.loanAmount
    this.loan.loanApplicationDate = "06/05/2021";
    
    console.log(this.loan)
    this.customerService.applyLoan(this.loan).subscribe(data =>console.log(data),error =>console.log(error));
    this.router.navigateByUrl('/apply-loan')
  }

}
