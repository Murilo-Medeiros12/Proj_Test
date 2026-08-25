import { NextResponse } from 'next/server';
import { ConcessionariaRepository } from '@/src/repository/ConcessionariaRepository';
import { ConcessionariaService } from '@/src/services/ConcessionariaService';

const service = new ConcessionariaService(new ConcessionariaRepository());

//GET: Lista todos os veículos
export async function GET() {
    try {
        const todasConcessionarias = await service.listar();
        return NextResponse.json(todasConcessionarias, { status:200 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 500});
    }
}

// Post: Cria um novo veículo
export async function POST(req) {
    try {
        const body = await req.json();
        const res = await service.cadastrar(body.nome, body.cnpj, body.cidade);
        return NextResponse.json(res, { status: 201 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 400 });
    }
}
