import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Loan } from '../../loan/Loan';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customerEmail:any;
  customerId:any;
  red:boolean = false;
  blue:boolean = false;
  green:boolean = false;
  loan:Loan = new Loan;
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerEmail = window.sessionStorage.getItem("customerEmailSession");
    if(this.customerEmail ==null)
    {
      this.router.navigateByUrl("/home")

    }
    this.customerId =parseInt(window.sessionStorage.getItem("customerIdsession"));
    this.customerService.getLoanDetails(this.customerId).subscribe(
      data3=>
      {
        this.loan.loanAmount = data3['loanAmount']
        this.loan.loanTenure = data3['loanTenure']
        this.loan.loanId = data3['loanId']
        this.loan.loanStatus = data3['loanStatus']
        if(this.loan.loanStatus == "REJECTED")
        {
          this.red = true;
        }
        else if(this.loan.loanStatus == "Waiting")
        {
          this.blue = true;

        }
        else if(this.loan.loanStatus == "ACCEPTED")
        {
          this.green = true;

        }
        this.loan.customer.customerName = data3['customer']['customerName']
        this.loan.customer.customerPhone = data3['customer']['customerPhone']
        this.loan.customer.address = data3['customer']['address']
        this.loan.vehicle.vehicleMaker = data3['vehicle']['vehicleMaker']
        this.loan.vehicle.vehicleModel = data3['vehicle']['vehicleModel']
        this.loan.vehicle.vehiclePrice = data3['vehicle']['vehiclePrice']
        console.log(data3)
      })

  }



  customerLogout()
  {
    window.sessionStorage.removeItem("customerEmailSession")
    window.sessionStorage.removeItem("customerIdsession")
    this.router.navigateByUrl("/home")

  }
}
