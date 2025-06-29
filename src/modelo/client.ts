import RG from "./RG";
import CPF from "./cpf";
import Telefone from "./telefone";
import Produto from "./prod";
import Services from "./services";

export default class Cliente {
    private id: number;
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private genero: string;
    private rg: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Services>;

    constructor(id: number, nome: string, nomeSocial: string, genero: string, cpf: CPF) {
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rg = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }

    public get getId(): number {
        return this.id;
    }

    public get getGen(): string {
        return this.genero;
    }

    public set setGen(novoGenero: string) {
        this.genero = novoGenero;
    }

    public get pegCPF(): CPF {
        return this.cpf;
    }

    public get PegRG(): Array<RG> {
        return this.rg;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }

    public get getServicosConsumidos(): Array<Services> {
        return this.servicosConsumidos;
    }

    // Setters / atualizadores
    public atualizarNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public atualizarNomeSocial(novoNomeSocial: string): void {
        this.nomeSocial = novoNomeSocial;
    }

    public atualizarGenero(novoGenero: string): void {
        this.genero = novoGenero;
    }

    public setGenero(novoGenero: string): void {
    this.genero = novoGenero;
    }

    // Métodos de consumo
    public consumirProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public setNomeSocial(novoNomeSocial: string): void {
        this.nomeSocial = novoNomeSocial;
    }

    public setCpf(novoCpf: CPF): void {
        this.cpf = novoCpf;
    }


    public consumirServico(servico: Services): void {
        this.servicosConsumidos.push(servico);
    }
}
