import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CheckEligibility } from '../CheckEligibility';
import { Vehicle } from '../Vehicle';
import {AngularFireStorage} from '@angular/fire/storage'
import { Customer } from '../../customer/customer';
import { Loan } from '../Loan';
import { CustomerService } from '../../customer.service';
import { Forms } from '../Forms';

@Component({
  selector: 'app-apply-loan',
  
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  
  button = 'Submit';
  isLoading = false;

  myReactiveForm=new FormGroup({
    'name1': new FormControl(''),
    // 'name2': new FormControl(''),
    'age'  : new FormControl(''),
    'gender'  : new FormControl(''),
    'mobilenumber'  : new FormControl(''),
    'emailid'  : new FormControl(''),
    // 'pass'  : new FormControl(''),
    'address'  : new FormControl(''),
    // 'state'  : new FormControl(''),
    // 'city'  : new FormControl(''),
    // 'pincode'  : new FormControl(''),
    'employmenttype'  : new FormControl(''),
    'annualsalary'  : new FormControl(''),
    'existingemi'  : new FormControl(''),
    'carmake'  : new FormControl(''),
    'carmodel'  : new FormControl(''),
    'exshowroomprice'  : new FormControl(''),
    'loanamount'  : new FormControl(''),
    'loantenure'  : new FormControl(''),
    'rateofinterest'  : new FormControl(''),
    'aadharcard'  : new FormControl(''),
    'pancard'  : new FormControl(''),
    'photo'  : new FormControl(''),
    'salaryslip'  : new FormControl(''),
  });
  
  customerEmailsession:any = window.sessionStorage.getItem('customerEmailSession');
  customer:Customer = new Customer;
  customerNew:Customer = new Customer;
  customerId:any;
  chkForm:Forms = new Forms();
  checkEligibity:CheckEligibility = new CheckEligibility(this.customer,"",0,"","","","","");
  checkEligibityNew:CheckEligibility = new CheckEligibility(this.customerNew,"",0,"","","","","");
  
  vehicle:Vehicle = {customerId:0,vehicleMaker:"",vehicleModel:"",vehiclePrice:0,vehicleExShowroomPrice:0}
  loan:Loan = new Loan;
  date = new Date();
   year = this.date.getFullYear()
  custId = 0;
  flag:boolean = true;
  flag1:boolean = true;
  flag2:boolean = true;
  flag3:boolean = true;
  constructor(private customerService:CustomerService, private router:Router, private http:HttpClient, private af:AngularFireStorage) { }

    


  ngOnInit(): void {
    this.customerId = window.sessionStorage.getItem("customerIdsession");

    this.customerService.getCustomerByEmail(this.customerEmailsession).subscribe(
      data=>
      {
        this.customer.customerName = data['customerName']
        this.customer.customerEmail = data['customerEmail']
        this.customer.customerPhone = data['customerPhone']
        this.customer.address = data['address']
        let temp_age = String(data['dob'])
        this.customer.dob =(this.year- parseInt(temp_age.substring(0,4))).toString()
        this.custId = data['customerId']
        this.customerService.getEligibility(this.custId).subscribe(
          data1=>
          {
            this.checkEligibity.annualSalary = data1['annualSalary']
            this.checkEligibity.customerEmployment = data1['customerEmployment']
            this.checkEligibity.existingEmi = data1['existingEmi']
             console.log(data1)
          })
          this.customerService.getVehicleDetails(this.custId).subscribe(
            data2=>
            {
              this.vehicle.vehicleMaker = data2['vehicleMaker']
              this.vehicle.vehicleModel = data2['vehicleModel']
              this.vehicle.vehiclePrice = data2['vehiclePrice']
              console.log(data2)
            })
            this.customerService.getLoanDetails(this.custId).subscribe(
              data3=>
              {
                this.loan.loanAmount = data3['loanAmount']
                this.loan.loanTenure = data3['loanTenure']
                this.loan.bank.vehicleLoanInterest = data3['bank']['vehicleLoanInterest']
                console.log(data3)
              })
            
      })
      
       

      

    
  }
  
  url=" ";
  url1=" ";
  url2=" ";
  url3=" ";
  path1 = "";
  path2 = "";
  path3 = "";
  path4 = "";
  
  path:string = "";
  
    onselectFile(e:any){
      this.flag = false;
      this.path=e.target.files[0];
      this.af.upload("/images/"+this.customerEmailsession+" aadharCard",this.path)
      if (e.target.files)
      {
        
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url=event.target.result;
         
        }
      }
    }
    onUploadAadhar()
    {
      let storage = this.af.storage;
      storage.ref("images/"+this.customerEmailsession+" aadharCard" ).getDownloadURL().then((url_new) => {
        console.log(url_new)
        this.path1 = url_new
      })
      console.log(this.path)
      
      
     
      // this.path1 = this.customerEmailsession+" aadharCard"
      this.flag = true;
    }



    onselectFile1(e:any){
      this.flag1 = false;
      this.path=e.target.files[0];
      this.af.upload("/images/"+this.customerEmailsession+" PanCard",this.path)
      if (e.target.files)
      {
        
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url1=event.target.result;
         
        }
      }
      
    }
    onUploadPancard()
    {
      console.log(this.path)
      
      let storage = this.af.storage;
      storage.ref("images/"+this.customerEmailsession+" PanCard").getDownloadURL().then((url_new) => {
        console.log(url_new)
        this.path2 = url_new
      })
      // this.path2 = this.customerEmailsession+" PanCard"
      this.flag1 = true;
    }

    onselectFile2(e:any){
      this.flag2 = false;
      this.path=e.target.files[0];
      this.af.upload("/images/"+this.customerEmailsession+" Photo",this.path)
      if (e.target.files)
      {
        
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url2=event.target.result;
         
        }
      }
    }
    onUploadPhoto()
    {
      console.log(this.path)
      
      let storage = this.af.storage;
      storage.ref("images/"+this.customerEmailsession+" Photo").getDownloadURL().then((url_new) => {
        console.log(url_new)
        this.path3 = url_new
      })
     
      // this.path3 = this.customerEmailsession+" Photo"
      this.flag2 = true;
    }



    onselectFile3(e:any){
      this.flag3 = false;
      this.path=e.target.files[0];
      this.af.upload("/images/"+this.customerEmailsession+" SalarySlip",this.path)
      if (e.target.files)
      {
        
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url3=event.target.result;
          
        }
      }
    }
    onUploadSalarySlip()
    {
      console.log(this.path)
      
      
      let storage = this.af.storage;
      storage.ref("images/"+this.customerEmailsession+" SalarySlip").getDownloadURL().then((url_new) => {
        console.log(url_new)
        this.path4 = url_new
      })
     
     
      
      // console.log(this.af.storage.refFromURL("gs://vehicle-loan-f7f94.appspot.com/images/akshay.parate@somaiya.edu SalarySlip"))
      // this.path4 = this.customerEmailsession+" SalarySlip"
      this.flag3 = true;
      
    }

    onSubmit(){
      this.chkForm.aadhar = this.path1;
      this.chkForm.pancard = this.path2
      this.chkForm.payslip = this.path4
      this.chkForm.photo = this.path3
      this.chkForm.customerId = this.customerId
      console.log(this.chkForm)
      this.customerService.addForms(this.chkForm)
      .subscribe(
        data2=>
        {
          console.log(data2)
        })
      this.router.navigateByUrl('/customer-dashboard')
      
    }
}
