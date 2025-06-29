"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarTop5ClientesMaisConsumiramValor = exports.ListarTop10ClientesMenosConsumiram = exports.ListarTop10ClientesMaisConsumiramQuantidade = exports.ListarTop10ClientesPorGenero = exports.ListarServicosMaisConsumidos = exports.ListarProdutosMaisConsumidos = exports.ListarClientesPorGenero = exports.ListagemClientes = exports.Listagem = void 0;
class Listagem {
}
exports.Listagem = Listagem;
class ListagemClientes extends Listagem {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de Clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.pegCPF.PegarValor}`);
            console.log(`Gênero: ${cliente.getGen}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.ListagemClientes = ListagemClientes;
class ListarClientesPorGenero extends Listagem {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        const masculino = this.clientes.filter(c => c.getGen === 'M');
        const feminino = this.clientes.filter(c => c.getGen === 'F');
        console.log("\nClientes do Gênero Masculino:");
        masculino.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (${cliente.getGen})`);
        });
        console.log("\nClientes do Gênero Feminino:");
        feminino.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} (${cliente.getGen})`);
        });
    }
}
exports.ListarClientesPorGenero = ListarClientesPorGenero;
class ListarProdutosMaisConsumidos extends Listagem {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        const consumo = {};
        this.empresa.getClientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(prod => {
                consumo[prod.nome] = (consumo[prod.nome] || 0) + 1;
            });
        });
        const produtosOrdenados = Object.entries(consumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA);
        console.log("\nProdutos mais consumidos:");
        produtosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} - ${qtd}x`);
        });
    }
}
exports.ListarProdutosMaisConsumidos = ListarProdutosMaisConsumidos;
class ListarServicosMaisConsumidos extends Listagem {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        const consumo = {};
        this.empresa.getClientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(serv => {
                consumo[serv.nome] = (consumo[serv.nome] || 0) + 1;
            });
        });
        const servicosOrdenados = Object.entries(consumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA);
        console.log("\nServiços mais consumidos:");
        servicosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} - ${qtd}x`);
        });
    }
}
exports.ListarServicosMaisConsumidos = ListarServicosMaisConsumidos;
class ListarTop10ClientesPorGenero extends Listagem {
    constructor(empresa, genero) {
        super();
        this.empresa = empresa;
        this.genero = genero;
    }
    calcularValorTotalConsumido(cliente) {
        const totalProdutos = cliente.getProdutosConsumidos.reduce((soma, p) => soma + p.preco, 0);
        const totalServicos = cliente.getServicosConsumidos.reduce((soma, s) => soma + s.preco, 0);
        return totalProdutos + totalServicos;
    }
    listar() {
        const filtrados = this.empresa.getClientes.filter(c => c.getGen === this.genero);
        const ordenados = filtrados.sort((a, b) => this.calcularValorTotalConsumido(b) - this.calcularValorTotalConsumido(a)).slice(0, 10);
        console.log(`\nTop 10 clientes do gênero ${this.genero} por consumo:`);
        ordenados.forEach((cliente, index) => {
            const total = this.calcularValorTotalConsumido(cliente);
            console.log(`${index + 1} - ${cliente.nome}: R$${total.toFixed(2)}`);
        });
    }
}
exports.ListarTop10ClientesPorGenero = ListarTop10ClientesPorGenero;
class ListarTop10ClientesMaisConsumiramQuantidade extends Listagem {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        const clientesOrdenados = this.empresa.getClientes
            .map(cliente => {
            const total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            return { cliente, total };
        })
            .sort((a, b) => b.total - a.total)
            .slice(0, 10);
        console.log("\nTop 10 clientes que mais consumiram (quantidade):");
        clientesOrdenados.forEach(({ cliente, total }, index) => {
            console.log(`${index + 1} - ${cliente.nome}: ${total} itens`);
        });
    }
}
exports.ListarTop10ClientesMaisConsumiramQuantidade = ListarTop10ClientesMaisConsumiramQuantidade;
class ListarTop10ClientesMenosConsumiram extends Listagem {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        const clientesOrdenados = this.empresa.getClientes
            .map(cliente => {
            const total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            return { cliente, total };
        })
            .sort((a, b) => a.total - b.total)
            .slice(0, 10);
        console.log("\nTop 10 clientes que menos consumiram (quantidade):");
        clientesOrdenados.forEach(({ cliente, total }, index) => {
            console.log(`${index + 1} - ${cliente.nome}: ${total} itens`);
        });
    }
}
exports.ListarTop10ClientesMenosConsumiram = ListarTop10ClientesMenosConsumiram;
class ListarTop5ClientesMaisConsumiramValor extends Listagem {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    calcularTotal(cliente) {
        const totalProdutos = cliente.getProdutosConsumidos.reduce((soma, p) => soma + p.preco, 0);
        const totalServicos = cliente.getServicosConsumidos.reduce((soma, s) => soma + s.preco, 0);
        return totalProdutos + totalServicos;
    }
    listar() {
        const clientesOrdenados = this.empresa.getClientes
            .map(cliente => ({
            cliente,
            total: this.calcularTotal(cliente)
        }))
            .sort((a, b) => b.total - a.total)
            .slice(0, 5);
        console.log("\nTop 5 clientes que mais consumiram em valor (R$):");
        clientesOrdenados.forEach(({ cliente, total }, index) => {
            console.log(`${index + 1} - ${cliente.nome}: R$${total.toFixed(2)}`);
        });
    }
}
exports.ListarTop5ClientesMaisConsumiramValor = ListarTop5ClientesMaisConsumiramValor;
