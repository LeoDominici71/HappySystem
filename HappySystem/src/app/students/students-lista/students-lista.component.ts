import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentsServiceService } from 'src/app/students-service.service';

@Component({
  selector: 'app-students-lista',
  templateUrl: './students-lista.component.html',
  styleUrls: ['./students-lista.component.css']
})
export class StudentsListaComponent {

  students: Student[] = [];

  constructor(private service: StudentsServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getStudents().subscribe(response => this.students = response);
  }

  novoCadastro(){
    this.router.navigate(['/students-form'])
  }

}
