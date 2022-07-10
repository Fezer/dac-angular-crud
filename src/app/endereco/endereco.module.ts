import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './service/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
