"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../modelo/client"));
var cpf_1 = __importDefault(require("../modelo/cpf")); // <-- Importa a classe CPF
var CadastroClientesAuto = /** @class */ (function () {
    function CadastroClientesAuto(empresa) {
        this.empresa = empresa;
    }
    CadastroClientesAuto.prototype.cadastrarClientes = function () {
        var _this = this;
        var nomes = [
            "Lucas Silva", "Maria Oliveira", "Carlos Santos", "Ana Souza", "Pedro Lima",
            "Juliana Castro", "Fernando Alves", "Patrícia Martins", "Rafael Dias", "Beatriz Gomes",
            "Rodrigo Melo", "Camila Rocha", "Vinícius Costa", "Larissa Fernandes", "Gustavo Almeida",
            "Isabela Cardoso", "Bruno Pires", "Tatiane Freitas", "Eduardo Ramos", "Aline Teixeira",
            "Marcelo Nogueira", "Vanessa Ribeiro", "André Carvalho", "Natália Monteiro", "Tiago Barros",
            "Débora Antunes", "João Henrique", "Bruna Lima", "Felipe Azevedo", "Renata Duarte"
        ];
        nomes.forEach(function (nome, i) {
            var numeroCpf = "".concat(i + 10000000000);
            var dataEmissao = new Date(2000, 1, 1);
            var cpf = new cpf_1.default(numeroCpf, dataEmissao);
            var genero = i % 2 === 0 ? "M" : "F";
            var cliente = new client_1.default(nome, nome, genero, cpf);
            _this.empresa.getClientes.push(cliente);
        });
        console.log("30 clientes cadastrados automaticamente com sucesso!");
    };
    return CadastroClientesAuto;
}());
exports.default = CadastroClientesAuto;
