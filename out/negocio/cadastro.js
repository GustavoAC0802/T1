"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroServico = exports.CadastroProduto = exports.CadastroProdutoServico = exports.CadastroClientesAuto = exports.CadastroCliente = exports.Cadastro = void 0;
const client_1 = __importDefault(require("../modelo/client"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const prod_1 = __importDefault(require("../modelo/prod"));
const services_1 = __importDefault(require("../modelo/services"));
const Entrada_1 = __importDefault(require("../io/Entrada"));
// Classe abstrata base
class Cadastro {
}
exports.Cadastro = Cadastro;
// Cadastro manual de cliente
class CadastroCliente extends Cadastro {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Informe seu gênero (M/F): `);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = Number(partesData[2]);
        let mes = Number(partesData[1]) - 1;
        let dia = Number(partesData[0]);
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new cpf_1.default(valor, dataEmissao);
        let id = this.clientes.length + 1;
        let cliente = new client_1.default(id, nome, nomeSocial, genero, cpf);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.CadastroCliente = CadastroCliente;
// Cadastro automático de 30 clientes
class CadastroClientesAuto {
    constructor(empresa) {
        this.empresa = empresa;
    }
    cadastrar() {
        const nomes = [
            "Lucas Silva", "Maria Oliveira", "Carlos Santos", "Ana Souza", "Pedro Lima",
            "Juliana Castro", "Fernando Alves", "Patrícia Martins", "Rafael Dias", "Beatriz Gomes",
            "Rodrigo Melo", "Camila Rocha", "Vinícius Costa", "Larissa Fernandes", "Gustavo Almeida",
            "Isabela Cardoso", "Bruno Pires", "Tatiane Freitas", "Eduardo Ramos", "Aline Teixeira",
            "Marcelo Nogueira", "Vanessa Ribeiro", "André Carvalho", "Natália Monteiro", "Tiago Barros",
            "Débora Antunes", "João Henrique", "Bruna Lima", "Felipe Azevedo", "Renata Duarte"
        ];
        nomes.forEach((nome, i) => {
            const numeroCpf = `${i + 10000000000}`;
            const dataEmissao = new Date(2000, 1, 1);
            const cpf = new cpf_1.default(numeroCpf, dataEmissao);
            const genero = i % 2 === 0 ? "M" : "F";
            const cliente = new client_1.default(i + 1, nome, nome, genero, cpf);
            //Atribuição de produtos aleatorios
            const produtos = this.empresa.getProdutos;
            const qtdProdutos = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < qtdProdutos; j++) {
                const produto = produtos[Math.floor(Math.random() * produtos.length)];
                cliente.getProdutosConsumidos.push(produto);
            }
            // Atribuir serviços aleatórios
            const servicos = this.empresa.getServicos;
            const qtdServicos = Math.floor(Math.random() * 3) + 1;
            for (let j = 0; j < qtdServicos; j++) {
                const servico = servicos[Math.floor(Math.random() * servicos.length)];
                cliente.getServicosConsumidos.push(servico);
            }
            this.empresa.getClientes.push(cliente);
        });
        console.log("30 clientes cadastrados automaticamente com produtos e serviços!");
    }
}
exports.CadastroClientesAuto = CadastroClientesAuto;
// Cadastro de produtos e serviços
class CadastroProdutoServico {
    constructor(empresa) {
        this.empresa = empresa;
    }
    cadastrar() {
        const produtos = [
            { nome: "Pomada Modeladora", preco: 29.9 },
            { nome: "Shampoo Antiqueda", preco: 34.9 },
            { nome: "Condicionador Hidratante", preco: 32.5 },
            { nome: "Óleo para Barba", preco: 24.0 },
            { nome: "Cera Capilar", preco: 19.9 },
            { nome: "Minoxidil", preco: 20.0 },
            { nome: "Creme de Pentear", preco: 15.5 },
            { nome: "Óleo Reparador de Pontas", preco: 35.0 },
            { nome: "Máscara de Reparação Profunda", preco: 12.5 },
            { nome: "Ativador de Cachos", preco: 17.9 },
            { nome: "Gel Fixador", preco: 18.0 },
            { nome: "Spray Fixador", preco: 22.5 },
            { nome: "Tônico Capilar", preco: 27.9 },
            { nome: "Máscara Facial de Argila", preco: 14.5 },
            { nome: "Esfoliante Facial", preco: 21.0 },
            { nome: "Creme Hidratante Facial", preco: 26.9 },
            { nome: "Sabonete Esfoliante", preco: 13.5 },
            { nome: "Protetor Térmico Capilar", preco: 30.0 },
            { nome: "Leave-in Finalizador", preco: 19.0 },
            { nome: "Sérum Capilar", preco: 36.0 }
        ];
        const servicos = [
            { nome: "Corte de Cabelo", preco: 25.0 },
            { nome: "Modelagem e Corte de Barba", preco: 30.0 },
            { nome: "Tratamento para Queda de Cabelo", preco: 45.0 },
            { nome: "Limpeza de Pele", preco: 50.0 },
            { nome: "Hidratação Capilar", preco: 40.0 },
            { nome: "Escova Progressiva", preco: 67.5 },
            { nome: "Mega Hair", preco: 80.2 },
            { nome: "Coloração", preco: 32.7 },
            { nome: "Dia de Noiva", preco: 98.5 },
            { nome: "Design de Sobrancelhas", preco: 22.5 }
        ];
        for (const p of produtos) {
            const produto = new prod_1.default(p.nome, p.preco);
            this.empresa.getProdutos.push(produto);
        }
        for (const s of servicos) {
            const servico = new services_1.default(s.nome, s.preco);
            this.empresa.getServicos.push(servico);
        }
        console.log("Produtos e serviços cadastrados com sucesso!");
    }
}
exports.CadastroProdutoServico = CadastroProdutoServico;
class CadastroProduto extends Cadastro {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `);
        let produto = new prod_1.default(nome, preco);
        this.produtos.push(produto);
        console.log(`Produto cadastrado com sucesso!\n`);
    }
}
exports.CadastroProduto = CadastroProduto;
// Cadastro manual de serviço
class CadastroServico extends Cadastro {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new services_1.default(nome, preco);
        this.servicos.push(servico);
        console.log(`Serviço cadastrado com sucesso!\n`);
    }
}
exports.CadastroServico = CadastroServico;
