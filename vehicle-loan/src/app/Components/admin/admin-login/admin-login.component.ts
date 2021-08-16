import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    username: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,Validators.required)
  })
  adminName:string = "";
  admin:Admin = new Admin;
  invalidLogin:boolean=false;
  notAdmin:boolean=false;
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
        // console.log(data['adminEmail'])
        if(data==null){
          this.notAdmin=true;
          this.invalidLogin=false;

        }
        if(this.loginForm.value.password==data['adminPassword'])
      {
        window.sessionStorage.setItem("adminName",data['adminName'])
        console.log("valid")
        
        this.router.navigateByUrl('/admin-dashboard')
      }
      else{   

        this.invalidLogin=true;
        this.notAdmin=false;
        console.log("not valid")
      }
      
      }
    
    )
      
      
  }

}
