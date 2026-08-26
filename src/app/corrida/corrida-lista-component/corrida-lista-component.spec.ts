import { TestBed } from '@angular/core/testing';
import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';

describe('CorridaService', () => {
  let service: CorridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorridaService]
    });
    service = TestBed.inject(CorridaService);
  });

  it('deve ser criado com sucesso', () => {
    expect(service).toBeTruthy();
  });

  it('Deve iniciar com a lista de corridas vazia', () => {
    const corridas = service.listarCorridas();
    expect(corridas.length).toBe(0);
  });

  it('Deve adicionar uma corrida', () => {
    const novaCorrida: Corrida = {
      data: '2026-09-10',
      distancia: '5km',
      descricao: 'Corrida de Aracaju'
    };

    service.adicionarCorrida(novaCorrida);

    const corridas = service.listarCorridas();
    expect(corridas.length).toBe(1);
    expect(corridas[0].descricao).toBe('Corrida de Aracaju');
    expect(corridas[0].id).toBe(1);
  });
});