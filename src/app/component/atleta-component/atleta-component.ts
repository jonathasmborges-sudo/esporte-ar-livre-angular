import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/atleta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  // Atributos ajustados para o esquema do MySQL
  nome = ''
  sexo = ''
  datanascimento = ''
  peso = 0
  altura = 0

  idAtleta = 0
  editar = false

  // Declaração do construtor
  constructor(
    private atletaService: AtletaService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  // Declaração de funções
  exibirDados() {
    console.log(this.nome, this.sexo, this.datanascimento, this.peso, this.altura)
    this.limparDados()
  }

  ngOnInit() {
    this.idAtleta = Number(this.http.snapshot.paramMap.get('id'))

    if (this.idAtleta > 0) {
      this.editar = true
      this.carregaDados(this.idAtleta)
    }
  }

  limparDados() {
    this.nome = ''
    this.sexo = ''
    this.datanascimento = ''
    this.peso = 0
    this.altura = 0
  }

  carregaDados(idAtleta: number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (dadosAtleta) => {
          this.nome = dadosAtleta.nome
          this.sexo = dadosAtleta.sexo
          this.datanascimento = dadosAtleta.datanascimento
          this.peso = dadosAtleta.peso
          this.altura = dadosAtleta.altura

          // Executa a detecção de alteração manualmente
          this.cdr.detectChanges()
        },
        error: (msgErro) => {
          console.log('ERRO AO LISTAR ATLETA', msgErro)
        }
      })
  }

  enviarDadosAtleta() {
    const atleta = new Atleta()
    atleta.nome = this.nome
    atleta.sexo = this.sexo
    atleta.datanascimento = this.datanascimento
    atleta.peso = this.peso
    atleta.altura = this.altura

    if (this.editar) {
      atleta.id = this.idAtleta

      this.atletaService.alterarAtleta(atleta)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log(msgErro)
          }
        })
    } else {
      this.atletaService.salvarAtleta(atleta)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log(msgErro)
          }
        })
    }

    this.limparDados()
  }
}