import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer/customer';
import { Bank } from './loan/Bank';
import { CheckEligibility } from './loan/CheckEligibility';
import { Loan } from './loan/Loan';
import { Vehicle } from './loan/Vehicle';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = "http://localhost:8090/api/vehicleloan";

  constructor(private http:HttpClient) { }

  getCustomerByEmail(customerEmail:string)
  {
    // console.log(this.http.get(this.baseUrl+'/loginCustomerByEmail/'+customerEmail))
    return this.http.get<Customer>(this.baseUrl+'/loginCustomerByEmail/'+customerEmail)
  }

  registerCustomer(customer:object):Observable<object>{
// console.log(this.http.post(`${this.baseUrl}`+'/registerCustomer', customer))
    return this.http.post(`${this.baseUrl}`+'/registerCustomer', customer);
  }
  checkEligibility(vehicle:object):Observable<object>{
    // console.log("will now enter controller")
    // console.log(this.http.post(`${this.baseUrl}`+'/addVehicle', vehicle))
    return this.http.post(`${this.baseUrl}`+'/addVehicle', vehicle);
  }

  registerEligibility(checkEligibility:object):Observable<object>{
    
    // console.log(this.http.post(`${this.baseUrl}`+'/checkEligibility/check-Eligiblity', checkEligibility))
    return this.http.post(`${this.baseUrl}`+'/checkEligibility/check-Eligiblity', checkEligibility);
  }
  
  getEligibility(customerId:number)
  {
    // console.log(this.http.get(this.baseUrl+'/loginCustomerByEmail/'+customerEmail))
    return this.http.get<CheckEligibility>("http://localhost:8090/api/vehicleloan/checkEligibility/get-Eligibility/"+customerId)
  }

  getVehicleDetails(customerId:number)
  {
    // console.log(this.http.get(this.baseUrl+'/loginCustomerByEmail/'+customerEmail))
    return this.http.get<Vehicle>("http://localhost:8090/api/vehicleloan/get-vehicle/"+customerId)
  }

  getLoanDetails(customerId:number)
  {
    // console.log(this.http.get(this.baseUrl+'/loginCustomerByEmail/'+customerEmail))
    return this.http.get<Loan>("http://localhost:8090/api/vehicleloan/applyLoan/get-loanDetails/"+customerId)
  }
  
  getBankDetails()
  {
    return this.http.get<Bank>("http://localhost:8090/api/vehicleloan/bank/getBankDetails/")

  }

  applyLoan(loan:object):Observable<object>{
    
    // console.log(this.http.post(`${this.baseUrl}`+'/checkEligibility/check-Eligiblity', checkEligibility))
    return this.http.post(`${this.baseUrl}`+'/applyLoan/apply', loan);
  }

  // addForms(customerId:number,aadharcard:string,photo:string,pancard:string,payslip:string)
  // {
  //   console.log(customerId)
  //   console.log(aadharcard)
  //   return this.http.get<any>("http://localhost:8090/api/vehicleloan/checkEligibility/add-forms/"+customerId+'/'+aadharcard+'/'+photo+'/'+pancard+'/'+payslip);
    
  // } 
  addForms(form:object):Observable<object>{
    
    // console.log(this.http.post(`${this.baseUrl}`+'/checkEligibility/check-Eligiblity', checkEligibility))
    return this.http.post(`${this.baseUrl}`+'/checkEligibility/add-chkforms', form);
  }

  getStockData()
  {
    // console.log(this.http.get(this.baseUrl+'/loginCustomerByEmail/'+customerEmail))
    return this.http.get<any>("https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=TATASTEEL&resolution=1D&from=1595229376&to=1629359461")
  }

}
