import Cliente from "../modelo/client";
import Empresa from "../modelo/empresa";

export abstract class Listagem {
    abstract listar(): void;
}

export class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
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

export class ListarClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
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

export class ListarProdutosMaisConsumidos extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    public listar(): void {
        const consumo: { [key: string]: number } = {};

        this.empresa.getClientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(prod => {
                consumo[prod.nome] = (consumo[prod.nome] || 0) + 1;
            });
        });

        const produtosOrdenados: [string, number][] = Object.entries(consumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA);

        console.log("\nProdutos mais consumidos:");
        produtosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} - ${qtd}x`);
        });
    }
}

export class ListarServicosMaisConsumidos extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    public listar(): void {
        const consumo: { [key: string]: number } = {};

        this.empresa.getClientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(serv => {
                consumo[serv.nome] = (consumo[serv.nome] || 0) + 1;
            });
        });

        const servicosOrdenados: [string, number][] = Object.entries(consumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA);

        console.log("\nServiços mais consumidos:");
        servicosOrdenados.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} - ${qtd}x`);
        });
    }
}

export class ListarTop10ClientesPorGenero extends Listagem {
    private empresa: Empresa;
    private genero: "M" | "F";

    constructor(empresa: Empresa, genero: "M" | "F") {
        super();
        this.empresa = empresa;
        this.genero = genero;
    }

    private calcularValorTotalConsumido(cliente: Cliente): number {
        const totalProdutos = cliente.getProdutosConsumidos.reduce((soma, p) => soma + p.preco, 0);
        const totalServicos = cliente.getServicosConsumidos.reduce((soma, s) => soma + s.preco, 0);
        return totalProdutos + totalServicos;
    }

    public listar(): void {
        const filtrados = this.empresa.getClientes.filter(c => c.getGen === this.genero);

        const ordenados = filtrados.sort((a, b) =>
            this.calcularValorTotalConsumido(b) - this.calcularValorTotalConsumido(a)
        ).slice(0, 10);

        console.log(`\nTop 10 clientes do gênero ${this.genero} por consumo:`);
        ordenados.forEach((cliente, index) => {
            const total = this.calcularValorTotalConsumido(cliente);
            console.log(`${index + 1} - ${cliente.nome}: R$${total.toFixed(2)}`);
        });
    }
}

export class ListarTop10ClientesMaisConsumiramQuantidade extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    public listar(): void {
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

export class ListarTop10ClientesMenosConsumiram extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    public listar(): void {
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

export class ListarTop5ClientesMaisConsumiramValor extends Listagem {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
    }

    private calcularTotal(cliente: Cliente): number {
        const totalProdutos = cliente.getProdutosConsumidos.reduce((soma, p) => soma + p.preco, 0);
        const totalServicos = cliente.getServicosConsumidos.reduce((soma, s) => soma + s.preco, 0);
        return totalProdutos + totalServicos;
    }

    public listar(): void {
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

