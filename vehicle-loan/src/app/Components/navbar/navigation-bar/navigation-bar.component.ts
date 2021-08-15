import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../../admin/admin-dashboard/admin-dashboard.component';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  // userName: string ="login";
  customerEmail:any;
  
  constructor() {
    
    
  }
  ngOnInit(): void 
  {
    this.customerEmail = window.sessionStorage.getItem("customerEmailSession")
    // console.log(this.customerEmail)
    // if(this.customerEmail==null)
    // {

    //   this.userName = "login"
    // }
    // else{
    //   this.userName = "title";
    //   console.log(this.userName)
  
    // }
 
  }
  
}
