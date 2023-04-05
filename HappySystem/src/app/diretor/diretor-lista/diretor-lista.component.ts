import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Diretor } from '../diretor';
import { DiretorService } from 'src/app/diretor.service';

@Component({
  selector: 'app-diretor-lista',
  templateUrl: './diretor-lista.component.html',
  styleUrls: ['./diretor-lista.component.css']
})
export class DiretorListaComponent {

  diretors: Diretor[] = [];
  diretorSelecionado: Diretor;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: DiretorService, private router: Router) {
  }


  ngOnInit(): void{
     this.service.getDiretor().subscribe(response => this.diretors = response);
  }

  novoCadastro(){
    this.router.navigate(['/diretor-form'])
  }

  preparaDelecao(diretor: Diretor){
    this.diretorSelecionado = diretor; 
  }

  deletarDiretor(){
    this.service
    .deletar(this.diretorSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = 'Professor(a) deletado(a) com sucesso!'
      this.ngOnInit();
    },
                erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Professor')
  }



}
