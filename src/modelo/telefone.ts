export default class Telefone{
    private DDD : string
    private Telefone : string

    constructor(DDD : string, Telefone : string){
        this.DDD = DDD
        this.Telefone =Telefone
    }

    public get PegTel(): string{
        return this.Telefone
    }

    public get PegDDD(): string{
        return this.DDD
    }
}