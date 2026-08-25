export class Concessionaria {
    static nome(nome: any) {
        throw new Error('Method not implemented.');
    }
    static cnpj(cnpj: any) {
        throw new Error('Method not implemented.');
    }
    static cidade(cidade: any) {
        throw new Error('Method not implemented.');
    }
    static id(id: any) {
        throw new Error('Method not implemented.');
    }
    id: number | any;
    nome: String;
    cnpj: String;
    cidade: String;


    constructor(nome: String, cnpj: String, cidade: String, id: any = null) {
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.cidade = cidade;
    }
}