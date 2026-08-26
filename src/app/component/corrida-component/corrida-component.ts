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
    const corrida: Corrida = {
      data: this.data,
      distancia: this.distancia,
      descricao: this.descricao
    };

    console.log('Payload enviado para a MockAPI:', corrida);

    this.corridaService.adicionarCorrida(corrida).subscribe({
      next: (resposta) => {
        console.log('Sucesso na API:', resposta);
        this.limparDados();
        this.router.navigate(['/corridas']);
      },
      error: (err) => {
        console.error('Detalhe do erro HTTP 400 da MockAPI:', err.error || err);
      }
    });
  }
}