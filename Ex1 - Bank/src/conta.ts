import { Correntista } from './correntista'

export class Conta {
    private _saldo: number = 0.0
    numero: string
    dono: Correntista

    constructor(numero: string, dono: Correntista){
        this.numero = numero
        this.dono = dono
    }

    get saldo(): number{
        return this._saldo;
    }

    set saldo(quantia){
        this._saldo = quantia
    }

    credita(quantia: number){
        this._saldo += quantia
    }

    debita(quantia: number): void {
        this._saldo -= quantia
    }
}