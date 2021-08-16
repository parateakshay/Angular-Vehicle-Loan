import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer/customer';
import { Loan } from '../../loan/Loan';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  filterTerm: string = "";
  custList: Customer[] = [];
  pendingLoanList : Loan[]=[];
  rejectedLoanList:Loan[]=[];
  adminName:any;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    this.adminName = window.sessionStorage.getItem("adminName");
    console.log(this.adminName)
    if(this.adminName==null)
    {
      this.router.navigateByUrl("/home");

    }
    
    this.loadData();
  }
    reject(l:Loan){

    console.log("Rejected");
    console.log(l);
    this.adminService.rejectLoan(l).subscribe(data => console.log(data), error => console.log(error));
    this.loadData();
    // this.ngOnInit();
    

  }

  accept(l:Loan){

    console.log("Rejected");
    console.log(l);
    this.adminService.acceptLoan(l).subscribe(data => console.log(data), error => console.log(error));
    this.loadData();

  }
  loadData() {

    this.adminService.getCustomers().subscribe((data: Customer[]) => {

      this.custList = data

      console.log(this.custList)

    })

    this.adminService.getPendingLoans().subscribe((data: Loan[]) => {

      this.pendingLoanList = data

      console.log(this.pendingLoanList)

    })

    this.adminService.getRejectedLoans().subscribe((data: Loan[]) => {

      this.rejectedLoanList = data
      
      console.log(this.rejectedLoanList)

    })


  }


  adminLogout()
  {
    window.sessionStorage.removeItem("adminName")
    this.router.navigateByUrl('/home')

  }
}












//   reject(l:Loan){

//     console.log("Rejected");
//     console.log(l);
//     this.customerService.rejectLoan(l).subscribe(data => console.log(data), error => console.log(error));
//     this.loadData();

//   }
//   loadData() {

//     this.customerService.getCustomers().subscribe((data: Customer[]) => {

//       this.custList = data

//       console.log(this.custList)

//     })

//     this.customerService.getLoans().subscribe((data: Loan[]) => {

//       this.loanList = data

//       console.log(this.loanList)

//     })

//     this.customerService.getRejectedLoans().subscribe((data: Loan[]) => {

//       this.rejectedloanList = data

//       console.log(this.rejectedloanList)

//     })


//   }

// }