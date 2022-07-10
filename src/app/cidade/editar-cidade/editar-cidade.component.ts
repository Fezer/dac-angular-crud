import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Estado } from 'src/app/shared';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  public cidade: Cidade = new Cidade();
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if (res !== undefined){
      this.cidade = res;
    }else{
      throw new Error ("Cidade não encontrada: id = " + id);
    }
  }

  atualizar(): void{
    if(this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }

}
