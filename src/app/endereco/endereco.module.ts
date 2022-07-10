import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './service/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumericoDirective } from '../shared/directives';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
