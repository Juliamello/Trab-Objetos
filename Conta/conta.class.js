export class Conta {
    constructor(agenda,numero) {
        this._saldo = 500;
        this._agencia = agencia;
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }

    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo}.00`;
    }
    sacar(dinheiro) {
        if(this._saldo >= dinheiro){
            this._saldo -= dinheiro;
            dinheiro ===null;
        }
    }
    depositarEmDinheiro(dinheiro) {
        if (dinheiro <= 1000){
            this._saldo += dinheiro;
            dinheiro === null;
        }
    }
    
    depositarEmCheque(dinheiro) {
        if (dinheiro <= 10000){
            this._saldo += dinheiro;
            dinheiro === null;
        }
    }
}