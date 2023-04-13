import { Component, OnInit } from '@angular/core';
import { gradesLista } from './gradesLista';
import { GradesService } from 'src/app/grades.service';
import { Student } from 'src/app/students/student';
import { Curso } from 'src/app/cursos/curso';

@Component({
  selector: 'app-grades-lista',
  templateUrl: './grades-lista.component.html',
  styleUrls: ['./grades-lista.component.css']
})
export class GradesListaComponent {

  studentNome: string;
  cursoNome: string;
  Lista: gradesLista[];
  message: string | null = null;

  constructor(private service: GradesService) {

  }

  ngOnInit(): void {

  }

  consultar() {
    this.service.getCursoStudent(this.studentNome, this.cursoNome).subscribe(response =>{ this.Lista = response;
      if(this.Lista.length <= 0){
  this.message = "Register not found.";
      }else{
        this.message = null;
      }
    });
  }
}

