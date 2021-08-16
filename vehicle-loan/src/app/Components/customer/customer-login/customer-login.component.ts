import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { CustomerService } from '../../customer.service';
import { HomeComponent } from '../../home/home/home.component';
import { NavigationBarComponent } from '../../navbar/navigation-bar/navigation-bar.component';
import { Customer } from '../customer';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  // nc:NavigationBarComponent = new NavigationBarComponent;
  // hc:HomeComponent = new HomeComponent();
  loginForm = new FormGroup({
    username: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,Validators.required)
  })
  customer:Customer = new Customer;
  customerName:string = "";
  invalidLogin:boolean=false;
  notCustomer:boolean=false;

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.loginForm.value);
    this.customerService.getCustomerByEmail(this.loginForm.value.username).subscribe(
      data=>
      {
        if(data==null){
          this.notCustomer=true;
          this.invalidLogin=false;
        }
        console.log(data)
        this.customer = data;
        console.log(data['customerName'])
        if(this.loginForm.value.password==data['customerPassword'])
      {
        console.log("valid")
        window.sessionStorage.setItem("customerEmailSession",data['customerEmail'])
        window.sessionStorage.setItem("customerIdsession",data['customerId'].toString())
        // sessionStorage.setItem("CustomerSession",JSON.stringify(data))
        // console.log(sessionStorage.getItem("CustomerSession"))
       
        this.router.navigateByUrl('/customer-home')
      }
      else{

        this.invalidLogin=true;
        this.notCustomer=false;
        console.log("not valid")
      }
      this.customerName = data['customerName']
      }
    
    )
      
      
  }

  

}
