import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../../curso.service'
import { Diretor } from 'src/app/diretor/diretor';
import { DiretorService } from '../../diretor.service'

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  diretor: Diretor[] = []
  curso: Curso;

  sucess: boolean = false;
  error: String[];

  constructor(private diretorService: DiretorService,
    private cursoService: CursoService) {
    this.curso = new Curso();

  }


  ngOnInit(): void {
    this.diretorService.getDiretor().subscribe(response => this.diretor = response);
  }

  OnSubmit() {
    this.cursoService
      .salvar(this.curso)
      .subscribe(response => {
        this.sucess = true;
        this.error = [];
        this.curso = new Curso;
      }, errorResponse => {
        this.sucess = false;
        this.error = [errorResponse.error.error];
      })
  }



}


