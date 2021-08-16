import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  adminName:string = "";
  admin:Admin = new Admin;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.loginForm.value);
    this.adminService.getAdminByEmail(this.loginForm.value.username).subscribe(
      data=>
      {
        console.log(data)
        this.admin = data;
        console.log(data['adminEmail'])
        if(this.loginForm.value.password==data['adminPassword'])
      {
        window.sessionStorage.setItem("adminName",data['adminName'])
        console.log("valid")
        
        this.router.navigateByUrl('/admin-dashboard')
      }
      else{

        console.log("not valid")
      }
      
      }
    
    )
      
      
  }

}
