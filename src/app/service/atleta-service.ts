import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {
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
