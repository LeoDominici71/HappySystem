import { Component } from '@angular/core';
import { Grade } from '../grade';
import { GradesService } from 'src/app/grades.service';
import { Student } from 'src/app/students/student';
import { Curso } from 'src/app/cursos/curso';
import { StudentsServiceService } from 'src/app/students-service.service';
import { CursoService } from 'src/app/curso.service';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent {

students: Student[] = []
curso: Curso[] = []
grade: Grade;
sucess: boolean = false;
error: String[];


constructor(private gradesService: GradesService,
  private studentService: StudentsServiceService,
  private cursoService: CursoService) {
  this.grade = new Grade();
  this.error = [];

}
  ngOnInit(): void{

    this.studentService.getStudents().subscribe( response => this.students = response);
    this.cursoService.getCurso().subscribe( response => this.curso = response);

  }

  OnSubmit() {
    this.gradesService.salvar(this.grade).subscribe(response => {
      this.sucess = true;
      this.error = [];
      this.grade = response;
    }, errorResponse => {
      this.sucess = false;
      this.error = [errorResponse.error.error];
  
  
  
    }
    )
  }
}
