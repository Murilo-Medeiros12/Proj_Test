import { CarroRepository } from './CarroRepository';
import { Carro } from '../models/Carro';
import prisma from '../lib/prisma';

jest.mock('../lib/prisma', () => ({
  __esModule: true,
  default: {
    carro: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe('Repositório CarroRepository', () => {
  let repository: CarroRepository;

  beforeEach(() => {
    repository = new CarroRepository();
    jest.clearAllMocks(); // Limpa o histórico de chamadas do Jest antes de cada teste
  });

  describe('Método salvar', () => {
    it('deve chamar o prisma.carro.create com os dados corretos', async () => {
      // Arrange
      const novoCarro = new Carro('Civic', 'Sedan');
      const retornoDoBanco = { id: 1, nome: 'Civic', tipo: 'Sedan' };

      // Forçamos o prisma "falso" a devolver esse objeto quando o create for chamado
      (prisma.carro.create as jest.Mock).mockResolvedValue(retornoDoBanco);

      // Act
      const resultado = await repository.salvar(novoCarro);

      // Assert
      // Verifica se a função create do Prisma foi chamada 1 vez
      expect(prisma.carro.create).toHaveBeenCalledTimes(1);

      // Verifica se o Repository montou o objeto exatamente como o Prisma exige
      expect(prisma.carro.create).toHaveBeenCalledWith({
        data: { nome: 'Civic', tipo: 'Sedan' },
      });

      // Verifica se o resultado devolvido é o que o banco (mock) entregou
      expect(resultado).toEqual(retornoDoBanco);
    });
  });

  describe('Método buscarPorId', () => {
    it('deve retornar uma nova instancia de Carro se encontrar no banco', async () => {
      // Arrange
      const carroNoBanco = { id: 10, nome: 'Gol', tipo: 'Hatch' };
      (prisma.carro.findUnique as jest.Mock).mockResolvedValue(carroNoBanco);

      // Act
      const resultado = await repository.buscarPorId(10);

      // Assert
      expect(prisma.carro.findUnique).toHaveBeenCalledWith({
        where: { id: 10 },
      });

      // O grande teste: o Repository converteu o dado puro do Prisma para a Classe Carro?
      expect(resultado).toBeInstanceOf(Carro);
      expect(resultado?.nome).toBe('Gol');
    });

    it('deve retornar null se o carro nao for encontrado', async () => {
      // Arrange
      (prisma.carro.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const resultado = await repository.buscarPorId(99);

      // Assert
      expect(resultado).toBeNull();
    });
  });
});