"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RG {
    constructor(rg, DtEmi) {
        this.rg = rg;
        this.DtEmi = DtEmi;
    }
    get PegRg() {
        return this.rg;
    }
    get PegDtEmi() {
        return this.DtEmi;
    }
}
exports.default = RG;
