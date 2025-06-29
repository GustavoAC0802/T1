export default class CPF{
    private valor : string
    private DtEmi : Date
    
    constructor(valor: string, DtEmi: Date){
        this.valor = valor
        this.DtEmi = DtEmi
    }

    public get PegarValor(): string{
        return this.valor
    }

    public get PegarDtEmi(): Date{
        return this.DtEmi
    }
}