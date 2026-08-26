import { Component, OnInit, signal } from '@angular/core';
import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent implements OnInit {
  listaCorridas = signal<Corrida[]>([]);

  constructor(private corridaService: CorridaService) { }

  ngOnInit(): void {
    this.corridaService.listarCorridas().subscribe((corridas)=>{
      this.listaCorridas.set(corridas)
    })

  }

  inscrever(id: number | undefined) {
    console.log('Inscrição na corrida ID:', id)
  }
}
