import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { AtletaService } from '../../../service/atleta-service';
import { Atleta } from '../../../models/atleta';

describe('AtletaService', () => {
  let service: AtletaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AtletaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AtletaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Deve calcular a idade corretamente', () => {
    const resultado = service.calcularIdade('1976-05-05');
    expect(resultado).toBe(50);
  });

  it('Deve retornar as pessoas', () => {
    const atletas: Atleta[] = [
      {
        id: 1,
        nome: "João",
        cpf: 12345678910,
        sexo: "M",
        cep: 49123123,
        bairro: "Centro",
        cidade: "Aracaju",
        uf: "Se",
        dataNascimento: "2000-02-25",
        ruaLogradouro: "Rua Sei lá das quantas"
      },
      {
        id: 2,
        nome: "Maria",
        cpf: 11122233302,
        sexo: "F",
        cep: 49123123,
        bairro: "Centro",
        cidade: "Aracaju",
        uf: "Se",
        dataNascimento: "2010-02-20",
        ruaLogradouro: "Rua Sei lá das quantas"
      }
    ];

    service.listarAtletas().subscribe(dados => {
      expect(dados.length).toBe(2);
      expect(dados[0].nome).toBe('João');
      expect(dados[1].nome).toBe('Maria');
    });

    //Post
    it('deve adicionar uma pessoa', () => {
      const atleta: Atleta = {
        "nome": "Maria Flor",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 4912345678910,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "dataNascimento": "2000-02-25",
        "id": 3,
        "ruaLogradouro": "Rua Sei lá das quantas"
      }

      service.salvarAtleta(atleta).subscribe(atleta => {
        expect(atletas).toEqual(atletas)
      })
    })

    //const request = httpMock.expectOne('http://localhost:3000/atletas')
    const request = httpMock.expectOne(`https://6a836243cb486d243403a95a.mockapi.io/atleta/1`)

    expect(request.request.method).toBe('GET');

    request.flush(atletas);
  });

  //PUT
  it('deve editar um atleta', () => {
    const atleta: Atleta = {
      "nome": "João Souza",
      "cpf": 12345678910,
      "sexo": "M",
      "cep": 49123123,
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "Se",
      "dataNascimento": "2000-02-25",
      "id": 1,
      "ruaLogradouro": "Rua Sei lá das quantas"
    }

    service.alterarAtleta(atleta).subscribe(atletas => {
      expect(atletas).toEqual(atleta)
    })

    const request = httpMock.expectOne(
      'https://6a836243cb486d243403a95a.mockapi.io/atleta/1'
    )

    expect(request.request.method).toBe('PUT')

    expect(request.request.body).toEqual(atleta)

    request.flush(atleta)
  })

  // Delete
  it('deve excluir um atleta', () => {

    service.excluirAtleta(1).subscribe()

    const request = httpMock.expectOne(
      'https://6a836243cb486d243403a95a.mockapi.io/atleta/1'
    )

    expect(request.request.method).toBe('DELETE')

    request.flush(null)
  })
});