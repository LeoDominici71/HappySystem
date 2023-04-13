import { Component } from '@angular/core';
import { gradesLista } from '../grades-lista/gradesLista';
import { GradesService } from 'src/app/grades.service';
import { Student } from 'src/app/students/student';
import { Curso } from 'src/app/cursos/curso';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Grade } from '../grade';

@Component({
  selector: 'app-grades-diretor',
  templateUrl: './grades-diretor.component.html',
  styleUrls: ['./grades-diretor.component.css']
})
export class GradesDiretorComponent {
  studentId: number;
  courseId: number;
  Lista: gradesLista[];
  message: string | null = null;
  gradesSelecionado: Grade;
  mensagemSucesso: string;
  mensagemErro: string;
  grades: Grade[] = [];


  constructor(private service: GradesService, private router: Router) {
   this.gradesSelecionado = new Grade();
  }

  ngOnInit(): void {
  }


  voltarParaListagem(){
    this.router.navigate(['/grades-form'])

  }

  deletarGrade(){
    this.service
    .deletar(this.studentId, this.courseId)
    .subscribe( response => this.mensagemSucesso = 'Grade deleted with success',
    erro => this.mensagemErro = 'Error when trying to delete')
}
}
