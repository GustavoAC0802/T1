"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CPF {
    constructor(valor, DtEmi) {
        this.valor = valor;
        this.DtEmi = DtEmi;
    }
    get PegarValor() {
        return this.valor;
    }
    get PegarDtEmi() {
        return this.DtEmi;
    }
}
exports.default = CPF;
