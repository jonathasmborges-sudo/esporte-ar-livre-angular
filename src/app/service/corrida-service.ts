import { Injectable } from "@angular/core";
import { Corrida } from "../models/corrida";

@Injectable({
    providedIn: 'root'
})
export class CorridaService {
    private corridas: Corrida[] = [];

    adicionarCorrida(corrida: Corrida){
        this.corridas.push(corrida);
    }

    listarCorridas(){
        return this.corridas;
    }
}