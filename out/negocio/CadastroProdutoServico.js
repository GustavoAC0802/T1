"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prod_1 = __importDefault(require("../modelo/prod"));
var services_1 = __importDefault(require("../modelo/services"));
var CadastroProdutoServico = /** @class */ (function () {
    function CadastroProdutoServico(empresa) {
        this.empresa = empresa;
    }
    CadastroProdutoServico.prototype.cadastrarProdutosEServicos = function () {
        var produtos = [
            { nome: "Pomada Modeladora", preco: 29.9 },
            { nome: "Shampoo Antiqueda", preco: 34.9 },
            { nome: "Condicionador Hidratante", preco: 32.5 },
            { nome: "Óleo para Barba", preco: 24.0 },
            { nome: "Cera Capilar", preco: 19.9 }
        ];
        var servicos = [
            { nome: "Corte de Cabelo", preco: 25.0 },
            { nome: "Modelagem e Corte de Barba", preco: 30.0 },
            { nome: "Tratamento para Queda de Cabelo", preco: 45.0 },
            { nome: "Limpeza de Pele", preco: 50.0 },
            { nome: "Hidratação Capilar", preco: 40.0 }
        ];
        for (var _i = 0, produtos_1 = produtos; _i < produtos_1.length; _i++) {
            var p = produtos_1[_i];
            var produto = new prod_1.default(p.nome, p.preco);
            this.empresa.getProdutos.push(produto);
        }
        for (var _a = 0, servicos_1 = servicos; _a < servicos_1.length; _a++) {
            var s = servicos_1[_a];
            var servico = new services_1.default(s.nome, s.preco);
            this.empresa.getServicos.push(servico);
        }
        console.log("Produtos e serviços cadastrados com sucesso!");
    };
    return CadastroProdutoServico;
}());
exports.default = CadastroProdutoServico;
