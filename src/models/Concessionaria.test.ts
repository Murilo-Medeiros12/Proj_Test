import { Concessionaria } from './Concessionaria';

describe('Modelo Carro', () => {
    it('deve criar uma concessionaria corretamente com nome, cnpj e cidade', () => {
        // 1. Preparação (Arrange)
        const nomeDaConcessionaria = '2Irmao';
        const cnpjDaConcessionaria = '111.222.333.444.555';
        const cidadeDaConcessionaria = 'Itapetininga-SP'

        const concessionaria = new Concessionaria(nomeDaConcessionaria, cnpjDaConcessionaria, cidadeDaConcessionaria);

        expect(Concessionaria.nome).toBe('2 Irmão');
        expect(Concessionaria.cnpj).toBe('111.222.333.444.555');
        expect(Concessionaria.cidade).toBe('Itapetininga-SP');
        expect(Concessionaria.id).toBeNull();
    });
});