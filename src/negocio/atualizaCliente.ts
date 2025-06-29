import Entrada from "../io/Entrada";
import Cliente from "../modelo/client";

export default class AtualizarCliente {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public atualizar(): void {
        const entrada = new Entrada();

        const id = entrada.receberNumero("Digite o ID do cliente que deseja atualizar: ");
        const cliente = this.clientes.find(c => c.getId === id);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }

        console.log(`Cliente encontrado: ${cliente.nome} (${cliente.getGen})`);
        
        const novoNome = entrada.receberTexto("Digite o novo nome (ou pressione Enter para manter): ");
        const novoNomeSocial = entrada.receberTexto("Digite o novo nome social (ou pressione Enter para manter): ");
        const novoGenero = entrada.receberTexto("Digite o novo gênero (M/F) (ou pressione Enter para manter): ").toUpperCase();

        if (novoNome.trim() !== "") {
            cliente.nome = novoNome;
        }

        if (novoNomeSocial.trim() !== "") {
            cliente.nomeSocial = novoNomeSocial;
        }

        if (novoGenero === "M" || novoGenero === "F") {
            cliente.setGen = novoGenero;
        }

        console.log("Cliente atualizado com sucesso!");
    }
}
