import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  customerEmail:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.customerEmail = window.sessionStorage.getItem("customerEmailSession");
    if(this.customerEmail ==null)
    {
      this.router.navigateByUrl("/home")

    }
  }

  customerLogout()
  {
    window.sessionStorage.removeItem("customerEmailSession")
    window.sessionStorage.removeItem("customerIdsession")
    this.router.navigateByUrl("/home")

  }
}
