export class Ventilador {
    constructor(watts, brand, minRPM, maxRPM) {
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._on = false;
        this._rpm = 0;
        this._velocity = 0;
           }
           
    get brand() {
        return this._brand;
    }
    get watts() {
    return this._watts;
    }
    get minRPM (){
            return this._minRPM;
    }
    get maxRPM() {
        return this._maxRPM;
    }
    get on() {
        return this._on;
    }
    get rpm() {
        return this._rpm;
    }
    get velocity() {
        return this._velocity;
    }
    get off() {
        return this._on;
    }

    speedUp() {
        this._on =true ;
        if(this._velocity === 1){
            this._rpm = this._minRPM;
        }
        if (this._velocity === 3){
            this._rpm = this._maxRPM;
        }
        if (this._velocity < 3){
            this._velocity ++;
        }
        if (this._velocity === 2){
            this._rpm = ((this.minRPM + this._maxRPM)) / 2;
        }

        slowDown() {
            if (this._velocity === 1) {
                this._on = !this._on;
                this._velocity = 0;
                this._rpm = 0;
            } else {
                if (this._velocity =! 0) {
                    this._velocity--;
                }
                if (this._velocity === 2) {
                    this._rpm = ((this._minRPM + this.maxRPM) / 2);
                }
                if (this.velocity === 1) {
                    this._rpm = this.minRPM;
                }

                turnOff () {
                    this._on = false;
                    this._rpm = 0;
                    this._velocity = 0;
                }
            }
        }
    }

}

