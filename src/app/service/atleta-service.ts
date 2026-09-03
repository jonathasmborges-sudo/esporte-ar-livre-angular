import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {

  constructor(private http: HttpClient) { }

  listarAtletas(): Observable<Atleta[]> {
    const urlApi = `http://localhost:8000/pessoa/`;
    return this.http.get<Atleta[]>(urlApi);
  }

  listarAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `http://localhost:8000/pessoa/${idAtleta}`;
    return this.http.get<Atleta>(urlApi);
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `http://localhost:8000/pessoa/`;
    return this.http.post<Atleta>(urlApi, atleta);
  }

  excluirAtleta(idAtleta: number): Observable<Atleta> {
    const urlApi = `http://localhost:8000/pessoa/${idAtleta}`;
    return this.http.delete<Atleta>(urlApi);
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `http://localhost:8000/pessoa/${atleta.id}`;
    return this.http.put<Atleta>(urlApi, atleta);
  }

  calcularIdade(dataNascimento: string): number {
    if (!dataNascimento) return 0

    const hoje = new Date()
    const nascimento = new Date(dataNascimento)
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()

    // Se ainda não chegou o aniversário no ano atual, subtrai por 1 ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--
    }

    return idade
  }

  /*
  //DECLARANDO ARRAY atletas
  private atletas: Atleta[] = []

  //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
  adicionarAtleta(atleta: Atleta){
      atleta.id = this.atletas.length + 1
      this.atletas.push(atleta)
  }

  listarAtletas(){
      console.table(this.atletas)
      return this.atletas
  }

  removerElemento(idAtleta: number){
      this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta)
  }

  removerElemento2(atleta: Atleta){
      this.atletas.splice(1,posArray)
  }

  alterarElemento(atleta: Atleta){
      let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
      this.atletas[posArray] = atleta
  }
  */

}