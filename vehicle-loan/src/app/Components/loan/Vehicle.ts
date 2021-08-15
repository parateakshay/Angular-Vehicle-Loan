export class Vehicle{
    // vehicleId:number = 0;
    customerId:number = 0;
    vehicleMaker:string = "";
    vehicleModel:string = "";
    vehiclePrice:number = 0;
    vehicleExShowroomPrice:number = 0;

    constructor(customerId:number,vehicleMaker:string,vehicleModel:string,vehiclePrice:number,vehicleExShowroomPrice:number)
    {
        this.customerId = customerId;
        this.vehicleMaker = vehicleMaker;
        this.vehicleModel = vehicleModel;
        this.vehiclePrice = vehiclePrice;
        this.vehicleExShowroomPrice = vehicleExShowroomPrice;

    }
    

}