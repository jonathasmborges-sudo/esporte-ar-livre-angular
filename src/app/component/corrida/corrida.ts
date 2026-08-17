import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';


@Component({
  selector: 'app-corrida',
  imports: [FormsModule],
  templateUrl: './corrida.html',
  styleUrl: './corrida.css',
})
export class CorridaComponent {
  // Declarando atributos
  data = ''
  distancia = ''
  descricao = ''


  // Declaração do construtor
  constructor(private corridaService: CorridaService) { }

  limparDados(){
    this.data = '';
    this.distancia = '';
    this.descricao = '';
  }

  salvar(){
    const corrida = new Corrida();
    corrida.data = this.data;
    corrida.distancia = this.distancia;
    corrida.descricao = this.descricao;

    this.corridaService.adicionarCorrida(corrida);
    this.limparDados();
    this.corridaService.listarCorridas();
  }
}
