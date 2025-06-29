"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(id, nome, nomeSocial, genero, cpf) {
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
    get getId() {
        return this.id;
    }
    get getGen() {
        return this.genero;
    }
    set setGen(novoGenero) {
        this.genero = novoGenero;
    }
    get pegCPF() {
        return this.cpf;
    }
    get PegRG() {
        return this.rg;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    // Setters / atualizadores
    atualizarNome(novoNome) {
        this.nome = novoNome;
    }
    atualizarNomeSocial(novoNomeSocial) {
        this.nomeSocial = novoNomeSocial;
    }
    atualizarGenero(novoGenero) {
        this.genero = novoGenero;
    }
    setGenero(novoGenero) {
        this.genero = novoGenero;
    }
    // Métodos de consumo
    consumirProduto(produto) {
        this.produtosConsumidos.push(produto);
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    setNomeSocial(novoNomeSocial) {
        this.nomeSocial = novoNomeSocial;
    }
    setCpf(novoCpf) {
        this.cpf = novoCpf;
    }
    consumirServico(servico) {
        this.servicosConsumidos.push(servico);
    }
}
exports.default = Cliente;
