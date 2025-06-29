import Entrada from "../io/Entrada";
import Empresa from "../modelo/empresa";
import {
    ListarClientesPorGenero,
    ListagemClientes, ListarProdutosMaisConsumidos, ListarServicosMaisConsumidos, Listagem, ListarTop10ClientesMaisConsumiramQuantidade, ListarTop10ClientesMenosConsumiram, ListarTop10ClientesPorGenero, ListarTop5ClientesMaisConsumiramValor
}
    from "../negocio/listagem";
import {
    CadastroCliente,
    CadastroClientesAuto,
    CadastroProduto,
    CadastroProdutoServico
} from "../negocio/cadastro";
import AtualizarCliente from "../negocio/atualizaCliente";
import CPF from "../modelo/cpf";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);

let empresa = new Empresa();

let cadastroPS = new CadastroProdutoServico(empresa);
cadastroPS.cadastrar();

let cadastroClientesAuto = new CadastroClientesAuto(empresa);
cadastroClientesAuto.cadastrar();

let execucao = true;
while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Listagem especial`);
    console.log(`4 - Atualizar dados`);
    console.log(`0 - Sair`);
    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);


    //Listagem pedida na ativ - 1
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            console.log(`1 - 10 Clientes que mais consumiram Serviços ou quantidade`);
            console.log(`2 - Listar Clientes por Gênero`);
            console.log(`3 - Listar Produtos ou Serviços mais consumidos`);
            console.log(`4 - Listar Produtos ou Serviços mais consumido por Gênero`);
            console.log(`5 - Listar 10 Clientes que menos consumiram Produtos ou Serviços`);
            console.log(`6 - Listar 5 clientes que mais consumiram em valor`);

            let opc = entrada.receberNumero(`Escolha uma opção: `);
            switch (opc) {
                case 1:
                    let listagem = new ListarTop10ClientesMaisConsumiramQuantidade(empresa);
                    listagem.listar();
                    break;
                case 2:
                    let listarGenero = new ListarClientesPorGenero(empresa.getClientes);
                    listarGenero.listar();
                    break;
                case 3:
                    let listarP = new ListarProdutosMaisConsumidos(empresa)
                    let listarS = new ListarServicosMaisConsumidos(empresa);
                    listarP.listar();
                    listarS.listar();
                    break;
                case 4:
                    let genero = entrada.receberTexto("Digite o gênero (M/F): ").toUpperCase();
                    if (genero === 'M' || genero === 'F') {
                        new ListarTop10ClientesPorGenero(empresa, genero as "M" | "F").listar();
                    } else {
                        console.log("Gênero inválido.");
                    }
                    break;
                case 5:
                    let listarT10 = new ListarTop10ClientesMenosConsumiram(empresa);
                    listarT10.listar();
                    break;
                case 6:
                    let ListarValor = new ListarTop5ClientesMaisConsumiramValor(empresa);
                    ListarValor.listar();
                    break;
            }
            break;

        //Atualização de dados - CRUD
        case 4:
            console.log(`Atualizar dados: `);
            console.log(`1 - Atualizar dados de Cliente`);
            console.log(`2 - Atualizar Produtos`);
            console.log(`3 - Atualizar Serviços`);
            console.log(`4 - Remover Cliente`);


            let opc2 = entrada.receberNumero(`Escolha uma opção: `);
            switch (opc2) {
                case 1:
                    const idCliente = entrada.receberNumero("Digite o ID do cliente que deseja atualizar: ");
                    const cliente = empresa.getClientes.find(c => c.getId === idCliente);

                    if (!cliente) {
                        console.log("Cliente não encontrado.");
                        break;
                    }

                    const novoNome = entrada.receberTexto("Novo nome: ");
                    const novoNomeSocial = entrada.receberTexto("Novo nome social: ");
                    const novoGenero = entrada.receberTexto("Novo gênero (M/F): ").toUpperCase();

                    if (novoGenero !== "M" && novoGenero !== "F") {
                        console.log("Gênero inválido. Use apenas M ou F.");
                        break;
                    }

                    const novoNumeroCpf = entrada.receberTexto("Novo número de CPF (apenas números): ");
                    const novaDataEmissao = new Date(); // ou peça para o usuário, se preferir
                    const novoCpf = new CPF(novoNumeroCpf, novaDataEmissao);

                    cliente.setNome(novoNome);
                    cliente.setNomeSocial(novoNomeSocial);
                    cliente.setCpf(novoCpf);
                    cliente.setGenero(novoGenero);

                    console.log("Cliente atualizado com sucesso!");
                    break;

                //Atualizar e Adicionar Produtos
                case 2:
                    console.log(`1 - Adicionar Produto e Preço`);
                    console.log(`2 - Atualizar Produto e Preço`);

                    let opc3 = entrada.receberNumero("Escolha uma Opção: ")

                    switch (opc3) {
                        case 1:
                            const novoProduto = new CadastroProduto(empresa.getProdutos);
                            novoProduto.cadastrar();
                            break;

                            break;

                        case 2:
                            console.log(`\nProdutos disponíveis:`);
                            empresa.getProdutos.forEach((produto, index) => {
                                console.log(`ID: ${index} | Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
                            });

                            const idProduto = entrada.receberNumero("Digite o ID do produto que deseja atualizar: ");
                            const produto = empresa.getProdutos[idProduto];

                            if (!produto) {
                                console.log("Produto não encontrado.");
                                break;
                            }

                            const novoNomeProduto = entrada.receberTexto("Novo nome do produto: ");
                            const novoPrecoProduto = entrada.receberNumero("Novo preço do produto: ");

                            produto.nome = novoNomeProduto;
                            produto.preco = novoPrecoProduto;

                            console.log("Produto atualizado com sucesso!");
                            break;
                    }
                    break;

                //Adicionar e Atualizar Serviços
                case 3:
                    console.log(`1 - Adicionar Serviço e Preço`);
                    console.log(`2 - Atualizar Serviço e Preço`);

                    let opc4 = entrada.receberNumero("Escolha uma Oçpção: ")
                    switch (opc4) {
                        case 1:
                            const novoServico = new CadastroProduto(empresa.getServicos); // mesma classe de Produto
                            novoServico.cadastrar();
                            break;

                        case 2:
                            console.log(`\nServiços disponíveis:`);
                            empresa.getServicos.forEach((servico, index) => {
                                console.log(`ID: ${index} | Nome: ${servico.nome} | Preço: R$ ${servico.preco.toFixed(2)}`);
                            });

                            const idServico = entrada.receberNumero("Digite o ID do serviço que deseja atualizar: ");
                            const servico = empresa.getServicos[idServico];

                            if (!servico) {
                                console.log("Serviço não encontrado.");
                                break;
                            }

                            const novoNomeServico = entrada.receberTexto("Novo nome do serviço: ");
                            const novoPrecoServico = entrada.receberNumero("Novo preço do serviço: ");

                            servico.nome = novoNomeServico;
                            servico.preco = novoPrecoServico;

                            console.log("Serviço atualizado com sucesso!");
                            break;
                    }
                    break;
                case 4:
                    console.log(`\nClientes disponíveis:`);
                    empresa.getClientes.forEach(cliente => {
                        console.log(`ID: ${cliente.getId} | Nome: ${cliente.nome}`);
                    });

                    const idRemover = entrada.receberNumero(`Digite o ID do cliente que deseja remover: `);
                    const indice = empresa.getClientes.findIndex(cliente => cliente.getId === idRemover);

                    if (indice !== -1) {
                        empresa.getClientes.splice(indice, 1);
                        console.log(`Cliente com ID ${idRemover} removido com sucesso.`);
                    } else {
                        console.log(`Cliente com ID ${idRemover} não encontrado.`);
                    }
                    break;
            }

            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação fracassada`);
    }
}