import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { CarroService } from "./CarroService";
import { rejects } from "assert/strict";
import { ConcessionariaService } from "./ConcessionariaService";

describe("Serviço de Concessionária", () => {

    let mockRepository: any;
    let concessionariaService: ConcessionariaService;

    beforeEach(() => {
        mockRepository = {
            salvar: jest.fn(),
            listarTodos: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            excluir: jest.fn()
        };

        concessionariaService = new ConcessionariaService(mockRepository);
    });

    describe('Testando validação do método cadastrar', () => {
        it('Deve lançar um erro se o nome tiver menos de 2 caracteres', async () => {
            await expect(concessionariaService.cadastrar('A', 'SUV'))
            .rejects.toThrow('O nome da concessionária deve ter pelo menos 2 caracteres.');

            await expect (concessionariaService.cadastrar('', 'SUV'))
            .rejects.toThrow('O nome da concessionária deve ter pelo menos 2 caracteres.');
        });

        it('deve lançar erro se o tipo não for informado', async () => {
            await expect(concessionariaService.cadastrar('Honda Civic', ''))
            .rejects.toThrow('O tipo da concessionária é obrigatório.');
        });
        });

        describe ('Testando validação do método buscarPorId', () => {
            it('Deve lançar um erro se o carro não existir no banco', async () => {
                mockRepository.buscarPorId.mockResolvedValue(null);

                await expect(concessionariaService.buscarPorId(999)
                ).rejects.toThrow('Concessionária não encontrada.');
            });
});
});