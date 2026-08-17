import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {

    constructor(private http: HttpClient) { }

    listarAtletasAPI(): Observable<Atleta[]> {
        const urlApi = `hhtps://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
        return this.http.get<Atleta[]>(urlApi)
    }

    listarAtleta(idAtleta: number): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
        return this.http.get<Atleta>(urlApi)
    }

    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
        return this.http.post<Atleta>(urlApi, Atleta)

    }

    excluirAtleta(idAtleta: number): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
        return this.http.delete<Atleta>(urlApi)
    }

    alterarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

        return this.http.put<Atleta>(urlApi, atleta)
    }


    // Declarando array atletas
    private atletas: Atleta[] = []

    // Declaração das funções de manipulação do array
    // Adicionando elemento
    adicionarAtleta(atleta: Atleta) {

        // Armengue para gerar id
        atleta.id = this.atletas.length + 1
        this.atletas.push(atleta)
    }

    // Listar elementos
    listarAtletas() {
        console.table(this.atletas)

        return this.atletas
    }

    // Remover elemento
    removerElemento(idAtleta: number) {
        this.atletas = this.atletas.filter(elem => elem.id !== idAtleta)
    }

    // Remover elemento 2
    removerElemento2(atleta: Atleta) {
        let posArray = this.atletas.findIndex(elem => elem.id !== atleta.id)
        this.atletas.splice(1, posArray)
    }

    // Alterando elemento do array
    alterarElemento(atleta: Atleta) {
        let posArray = this.atletas.findIndex(elem => elem.id !== atleta.id)
        this.atletas[posArray] = atleta
    }
}
