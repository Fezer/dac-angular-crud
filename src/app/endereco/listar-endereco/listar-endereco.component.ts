import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../service/endereco.service';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService : EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[]{
    //return this.enderecoService.listarTodos();

    return [
      new Endereco(1, "Rua 1", 20),
      new Endereco(2, "Rua 2", 52),
      new Endereco(3, "Rua 3", 33),
      new Endereco(4, "Rua 4", 88),
    ];
  }

  remover($event: any, endereco: Endereco): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o endereco ${endereco.rua}?`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }

}
