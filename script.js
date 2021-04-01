class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume;
    #isStarted;
    #mileage;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption, currentFuelVolume = 0, isStarted = false, mileage = 0) {
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.#currentFuelVolume = currentFuelVolume;
        this.#isStarted = isStarted;
        this.#mileage = mileage;

        
    }

    start(){
        if(this.#isStarted = false){
            this.#isStarted = true
            console.log(this.#isStarted)
        }
    }
    get brand() {
        return this.#brand
    }
    set brand(value){
        
        if(typeof value === "string" && value.length < 50){
            this.#brand = value;
        } else{
            throw new Error('xlkflke')
        }
    }

    get model() {
        return this.#model
    }
    set model(value){
        if(typeof value === "string" && value.length < 50){
            this.#model = value;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(value) {
        if(typeof value === "number" && value <= 2021 && value >= 1900){
            this.#yearOfManufacturing = value;
        }else {
            console.log('err')
        }
    }

    get maxSpeed(){
        return `${this.#maxSpeed} км/ч`
    }
    set maxSpeed(value){
        if(typeof value === "number" && value > 100 && value < 300) {
            this.#maxSpeed = value
        }
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} л`
    }
    set maxFuelVolume(value){
        if(typeof value === "number" && value > 5 && value < 20){
            this.#maxFuelVolume = value;
        }
    }

    get fuelConsumption(){
        return `${this.#fuelConsumption} л/100км`
    }
    set fuelConsumption(value){
        if(typeof value === "Number") {
            this.#fuelConsumption = value;
        }
    }

    get currentFuelVolume(){
        return `${this.#currentFuelVolume} л`
    }


    get isStarted(){
        return this.#isStarted;
    }


    get mileage(){
        return `${this.#mileage} км`
    }


    
    

    shutDownEngine(){
        if(this.#isStarted = false){
            throw new Error('Машина ещё не заведена');
        }
        this.#isStarted = false;
    }

    fillUpGasTank(fuelVolume){
        if(typeof fuelVolume !=='Number' || fuelVolume <= 0){
            throw new Error('Неверное количество топлива для заправки');
        }
        if (fuelVolume + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен'); 
        }
        this.#currentFuelVolume += fuelVolume;
    }
    drive(speed, hours){
        if(typeof speed !=='Number' || speed <= 0){
            throw new Error('Неверная скорость');
        }
        if(typeof hours !=='Number' || hours <= 0){
            throw new Error('Неверное количество часов');
        }
        
        if (speed > this.#maxSpeed){
            throw new Error('Машина не может ехать так быстро')
        }
        if (this.#isStarted = false){
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }
        if(hours * this.#fuelConsumption > this.#currentFuelVolume){
            throw new Error('Недостаточно топлива')
        }
        this.#mileage += speed * hours;
        this.#currentFuelVolume -=  this.#fuelConsumption * hours;
    }
}

