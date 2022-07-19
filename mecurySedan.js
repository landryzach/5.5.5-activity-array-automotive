const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 1;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + "All aboard.");

            }
        } else {
            console.log(this.model + " " + this.make + "Car is full.");
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine started");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) { 
            console.log("Time for maintenance.")           
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}


let myCar = new Car('mercury', 'Mariner', '2011', 'white', 29999)

myCar.start()
myCar.loadPassenger()
myCar.stop()
myCar.checkService()

console.log(myCar)