import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from 'src/app/curso.service';
import { DiretorService } from 'src/app/diretor.service';
import { Diretor } from 'src/app/diretor/diretor';
import { cursoListaBusca } from './cursoListaBusca';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent {

  cursos: Curso[] = [];
  diretor: Diretor[] = [];
  lista: cursoListaBusca[] = [];
  cursoSelecionado: Curso;
  mensagemSucesso: string;
  mensagemErro: string;


  constructor(private service: CursoService,
    private diretorService: DiretorService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getCurso().subscribe(response => this.cursos = response);
    this.service.getCursoLista().subscribe(response => {
      this.lista = response;
    });
}
  novoCadastro() {
    this.router.navigate(['/cursos-form'])
  }

  preparaDelecao(curso: Curso){
    this.cursoSelecionado = curso;
  }

  deletarCurso(){
    this.service
    .deletar(this.cursoSelecionado)
    .subscribe( response => this.mensagemSucesso = 'Curso deletado com sucesso',
    erro => this.mensagemErro = 'Ocorreu um erro ao deleter o cliente')
  }



}
