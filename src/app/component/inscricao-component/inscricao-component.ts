import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao-component',
  imports: [FormsModule],
  templateUrl: './inscricao-component.html',
  styleUrl: './inscricao-component.css'
})
export class InscricaoComponent {
  atletaSelecionado = '';
  cpf = '';
  corridaSelecionada = '';
  distancia = '5km';
  tamanhoCamiseta = '';
  categoria = 'Geral Masculino / 30-39 anos';
  valorInscricao = '89,90';
  aceitouTermos = false;

  finalizarInscricao() {
    if (this.aceitouTermos) {
      console.log('Inscrição efetuada com sucesso!');
    }
  }
}