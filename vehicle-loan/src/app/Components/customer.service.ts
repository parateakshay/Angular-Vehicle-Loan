import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  base_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): any {
    console.log(this.httpClient.get(`${this.base_url}/admins`));
    return this.httpClient.get(`${this.base_url}/admins`);
  }
}
