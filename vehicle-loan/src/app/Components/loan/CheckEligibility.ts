import { Customer } from "../customer/customer";

export class CheckEligibility
{
    customer:Customer = new Customer;
    customerEmployment:string = "";
    annualSalary:number = 0;
    existingEmi:string = "";
    aadharCard:string = "";
    proPic:string = "";
    pancard:string = "";
    paySlip:string = "";


    constructor(customer:Customer,customerEmployment:string,annualSalary:number,existingEmi:string,aadharCard:string,proPic:string,pancard:string,paySlip:string)
    {
        this.customer=customer;
        this.customerEmployment=customerEmployment;
        this.annualSalary = annualSalary;
        this.existingEmi = existingEmi;
        this.aadharCard = aadharCard;
        this.proPic = proPic;
        this.pancard = pancard;
        this.paySlip = paySlip;

    }
}