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
        if (typeof brand === 'string' && brand.length < 50) {
            this.#brand = brand;
        } else {
            throw new Error('Wrong Brand value')
        }

        if (typeof model === 'string' && model.length < 50) {
            this.#model = model;
        } else {
            throw new Error('Wrong Model value')
        }

        if (yearOfManufacturing <= 2021 && yearOfManufacturing >= 1900 && Number.isInteger(yearOfManufacturing)) {
            this.#yearOfManufacturing = yearOfManufacturing;
        } else {
            throw new Error('Wrong Year Of Manufacturing value')
        }

        if (typeof maxSpeed === "number" && maxSpeed > 100 && maxSpeed < 300) {
            this.#maxSpeed = maxSpeed;
        } else {
            throw new Error('Wrong Max Speed value')
        }

        if (typeof maxFuelVolume === "number" && maxFuelVolume > 5 && maxFuelVolume < 20) {
            this.#maxFuelVolume = maxFuelVolume;
        } else {
            throw new Error('Wrong Max Fuel Volume value')
        }

        if (typeof fuelConsumption === "number") {
            this.#fuelConsumption = fuelConsumption;
        } else {
            throw new Error('Wrong Fuel Consumption value')
        }

        if (typeof currentFuelVolume === "number" && currentFuelVolume <= maxFuelVolume && currentFuelVolume >= 0) {
            this.#currentFuelVolume = currentFuelVolume;
        } else {
            throw new Error('Wrong Current Fuel Volume value')
        }

        if (typeof isStarted === 'boolean') {
            this.#isStarted = isStarted;
        } else {
            throw new Error('Wrong value of is Started')
        }

        if (typeof mileage === 'number')
            this.#mileage = mileage;
    }


    get brand() {
        return this.#brand
    }
    set brand(value) {

        if (typeof value === "string" && value.length < 50) {
            this.#brand = value;
        } else {
            throw new Error('Wrong value of brand')
        }
    }

    get model() {
        return this.#model
    }
    set model(value) {
        if (typeof value === "string" && value.length < 50) {
            this.#model = value;
        } else {
            throw new Error('Wrong value of model')
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(value) {
        if (typeof value === "number" && value <= 2021 && value >= 1900) {
            this.#yearOfManufacturing = value;
        } else {
            throw new Error('Wrong value of yearOfManufacturing')
        }
    }

    get maxSpeed() {
        return `${this.#maxSpeed} ????/??`
    }
    set maxSpeed(value) {
        if (typeof value === "number" && value > 100 && value < 300) {
            this.#maxSpeed = value
        } else {
            throw new Error('Wrong value of maxSpeed')
        }
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} ??`
    }
    set maxFuelVolume(value) {
        if (typeof value === "number" && value > 5 && value < 20) {
            this.#maxFuelVolume = value;
        } else {
            throw new Error('Wrong value of maxFuelVolume')
        }
    }

    get fuelConsumption() {
        return `${this.#fuelConsumption} ??/100????`
    }
    set fuelConsumption(value) {
        if (typeof value === "Number") {
            this.#fuelConsumption = value;
        } else {
            throw new Error('Wrong value of fuelConsumption')
        }
    }

    get currentFuelVolume() {
        return `${this.#currentFuelVolume} ??`
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return `${this.#mileage} ????`
    }

    start() {
        if (this.#isStarted) {
            throw new Error('???????????? ?????? ????????????????')
        } else {
            this.#isStarted = !this.#isStarted
        }
    }

    shutDownEngine() {
        if (this.#isStarted) {
            this.#isStarted = !this.#isStarted;
        } else {
            throw new Error('???????????? ?????? ???? ????????????????');
        }
    }

    fillUpGasTank(fuelVolume) {
        if (typeof fuelVolume !== 'number' || fuelVolume <= 0) {
            throw new Error('???????????????? ???????????????????? ?????????????? ?????? ????????????????');
        }
        if (fuelVolume + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error('?????????????????? ?????? ????????????????????');
        }
        this.#currentFuelVolume += fuelVolume;
    }

    drive(speed, hours) {
        if (typeof speed !== 'number' || speed <= 0) {
            throw new Error('???????????????? ????????????????');
        }
        if (typeof hours !== 'number' || hours <= 0) {
            throw new Error('???????????????? ???????????????????? ??????????');
        }

        if (speed > this.#maxSpeed) {
            throw new Error('???????????? ???? ?????????? ?????????? ?????? ????????????')
        }
        if (!this.#isStarted) {
            throw new Error('???????????? ???????????? ???????? ????????????????, ?????????? ??????????');
        }
        if (hours * this.#fuelConsumption > this.#currentFuelVolume) {
            throw new Error('???????????????????????? ??????????????')
        }
        this.#mileage += speed * hours;
        this.#currentFuelVolume -= this.#fuelConsumption * hours;
    }
}
//42