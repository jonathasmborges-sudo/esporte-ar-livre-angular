import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {
  private urlApi = 'https://6a836243cb486d243403a95a.mockapi.io/corrida';

  constructor(private http: HttpClient) {}

  listarCorridas(): Observable<Corrida[]> {
    return this.http.get<Corrida[]>(this.urlApi);
  }

  listarCorrida(id: number): Observable<Corrida> {
    return this.http.get<Corrida>(`${this.urlApi}/${id}`);
  }

  adicionarCorrida(corrida: Corrida): Observable<Corrida> {
    return this.http.post<Corrida>(this.urlApi, corrida);
  }

  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    return this.http.put<Corrida>(`${this.urlApi}/${corrida.id}`, corrida);
  }

  excluirCorrida(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }
}