import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Components/customer.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getStockData().subscribe(
      data=>
      {
        console.log(data);
      })
  }

}
