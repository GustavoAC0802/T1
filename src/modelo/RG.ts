export default class RG{
    private rg : string
    private DtEmi : Date

    constructor(rg : string, DtEmi : Date){
        this.rg  = rg
        this.DtEmi = DtEmi
    }

    public get PegRg(): string{
        return this.rg
    }

    public get PegDtEmi(): Date{
        return this.DtEmi
    }
}