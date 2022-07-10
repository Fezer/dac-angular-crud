import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoService } from './services/estado.service';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';



@NgModule({
  declarations: [
    EditarEstadoComponent,
    InserirEstadoComponent,
    ListarEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
