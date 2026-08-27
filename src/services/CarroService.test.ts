import {CarroService} from "./CarroService";

describe('Serviço CarroService', () => {

    let morkRepository: any;

    let carroService: CarroService;

    beforeEach(() => {

        morkRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            save: jest.fn(),
            delete: jest.fn()
        };
        carroService = new CarroService(morkRepository);
    });
    describe('Testando Validação de metodo cadastrar', () => {

        it('Deve lançar erro se o nome tiver menos de 2 caracteres', async () => {
            await expect(carroService.cadastrar( '','SUV'))
            .rejects.toThrow('O nome deve ter pelo menos 2 caracteres');
        });
        it('Deve lançar erro se o tipo não for informado', async () => {
            await expect(carroService.cadastrar('Honda Civic', ''))
                .rejects.toThrow('O tipo do veiculo é obrigatorio');
        });
    });
    describe('Testando Validação de metodo buscarPorId', () => {

        it('Deve lançar erro se o carro não existir no sistema', async () => {
            morkRepository.buscarPorId.mockResolvedValue(null);

            await expect(carroService.buscarPorId(999))
            .rejects.toThrow('Carro não encontrado');
        });
    });
});

