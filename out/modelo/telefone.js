"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(DDD, Telefone) {
        this.DDD = DDD;
        this.Telefone = Telefone;
    }
    get PegTel() {
        return this.Telefone;
    }
    get PegDDD() {
        return this.DDD;
    }
}
exports.default = Telefone;
