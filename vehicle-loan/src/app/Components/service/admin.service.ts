import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../loan/Loan';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private base_url = "http://localhost:8090/api/vehicleloan";

  constructor(private httpClient:HttpClient) { }

  getCustomers(): any {
    console.log(this.httpClient.get(`${this.base_url}/getAllCustomers`));
    return this.httpClient.get(`${this.base_url}/getAllCustomers`);
  }

  getPendingLoans(): any {
    console.log(this.httpClient.get(`${this.base_url}/applyLoan/getPendingLoans`));
    return this.httpClient.get(`${this.base_url}/applyLoan/getPendingLoans`);
  }

  getRejectedLoans(): any {
    console.log(this.httpClient.get(`${this.base_url}/applyLoan/getRejectedLoans`));
    return this.httpClient.get(`${this.base_url}/applyLoan/getRejectedLoans`);
  }


rejectLoan(loan:Loan):Observable<Object> {	
        console.log("Reached Here")	;
        console.log(loan)	;
        return this.httpClient.post(`${this.base_url}` + '/applyLoan/rejectLoan',loan);		
      }
    acceptLoan(loan:Loan):Observable<Object> {	
      console.log("Reached Here")	;
      console.log(loan)	;
      return this.httpClient.post(`${this.base_url}` + '/applyLoan/acceptLoan',loan);		
    }
}
