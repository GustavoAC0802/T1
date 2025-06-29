import Cliente from "./client"
import Produto from "./prod"
import Services from "./services"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Services>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
}