import { Concessionaria } from '@/src/models/Concessionaria';

export class ConcessionariaService {
    constructor(repository) {
        this.repository = repository;
    }

    async cadastrar (nome, cnpj, cidade) {
        if (!nome || nome.lenght < 2)
            throw new Error("O nome deve ter no mínimo 2 caracteres.");
        if (!cnpj)
            throw new Error("O CNPJ é obrigatório.");
        if (!cidade)
            throw new Error("A cidade é obrigatória.");
        return await this.repository.salvar(new Concessionaria(nome, cnpj, cidade));
    }

    async listar() {
        return await this.repository.listarTodos();
    }

    async buscarPorId(id) {
        const concessionaria = await this.repository.buscarPorId(id);
        if (!concessionaria) throw new Error("Concessionária não encontrado.");
        return concessionaria;
    }

    async atualizar(id, nome, cnpj, cidade) {
        if (!id)
            throw new Error("ID é obrigatório para atualização.");
        if (!nome || !cnpj || !cidade)
            throw new Error("Nome, cnpj e cidade são obrigatórios.");

        await this.buscarPorId(id); //Garante que existe antes de atualizar
        const concessionariaAtualizada = new Concessionaria(nome, cnpj, cidade, id);
        return await this.repository.atualizar(id, concessionariaAtualizada);
    }

    async excluir(id) {
        await this.buscarPorId(id); //Verifica se existe amtes de ter
        return await this.repository.excluir(id);
    }
}