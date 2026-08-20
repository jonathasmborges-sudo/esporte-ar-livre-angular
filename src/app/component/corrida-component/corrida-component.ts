import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {
  data = '';
  distancia = '';
  descricao = '';

  constructor(
    private corridaService: CorridaService,
    private router: Router
  ) { }

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

    // Redireciona para a rota '/corridas' configurada no app.routes.ts
    this.router.navigate(['/corridas']);
  }
}