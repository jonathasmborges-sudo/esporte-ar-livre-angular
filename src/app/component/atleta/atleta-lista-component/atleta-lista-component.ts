import { Component } from '@angular/core';
import { Atleta } from '../../../models/atleta';
import { AtletaService } from '../../../service/atleta-service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';


@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class AtletaListaComponent {

  //listaAtletas: Atleta[] = []
  listaAtletas = signal<Atleta[]>([]);
  constructor(private listaService: AtletaService, private router: Router){}

  ngOnInit(){
    this.listar()
  }

  listar(){
  this.listaService.listarAtletas()
  .subscribe({
    next: (dadosAtletas) => {
      this.listaAtletas.set(dadosAtletas) 
    },
    error:(msgErro) => {
      console.log("Erro ao listar Atletas", msgErro)
    }
  })
}

  excluir(id: number) {
    if (confirm("Deseja excluir o atleta?")){
      this.listaService.excluirAtleta(id)
      .subscribe({
        next: (resposta) => {
          console.log("Excluído com sucesso!", resposta)
          this.listar()

        },
        error: (msgErro) => {
          console.log("Erro ao listar Atletas", msgErro)
        }
      })
    }
  }

  carregaDadosAtletaForm(atleta: Atleta){
    this.router.navigate(['/cadastroAtleta', atleta.id])
  }
}
