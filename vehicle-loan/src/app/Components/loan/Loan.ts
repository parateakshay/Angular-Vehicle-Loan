
import { Customer } from "../customer/customer";
import { Bank } from "./Bank";
import { Vehicle } from "./Vehicle";

export class Loan{

    loanId:number = 0;
    loanStatus:string = "";
    loanApplicationDate:string = "";
    loanTenure:number = 0;
    loanAmount:number = 0;
    customer:Customer = new Customer;
    bank:Bank = new Bank;
    vehicle:Vehicle = {customerId:0,vehicleMaker:"",vehicleModel:"",vehiclePrice:0,vehicleExShowroomPrice:0};
    constructor(){

    }


}