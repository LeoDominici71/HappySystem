import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../../curso.service'
import { Diretor } from 'src/app/diretor/diretor';
import { DiretorService } from '../../diretor.service'
import { Observable } from 'rxjs';
import { cursoProfBusca } from '../cursos-prof/cursoProfBusca';

@Component({
  selector: 'app-cursos-prof',
  templateUrl: './cursos-prof.component.html',
  styleUrls: ['./cursos-prof.component.css']
})
export class CursosProfComponent {

  nome: string;
  diretor: Diretor[] = []
  curso: Curso;
  lista: cursoProfBusca[];

  constructor(private diretorService: DiretorService,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
      this.curso = new Curso();

  }

  ngOnInit(): void{

  }

  consultar(){
this.cursoService.getNome(this.nome)
.subscribe(response => this.lista = response);
  }

}
