import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Student } from '../student'
import { StudentsServiceService } from '../../students-service.service'
  
@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent {
  student: Student;
  sucess: boolean = false;
  error: String[];

  constructor(private studentService: StudentsServiceService, private router: Router) {
    this.student = new Student();
    this.error = [];
  }

  ngOnInit(): void {

  }

  voltarParaListagem(){
    this.router.navigate(['/students-lista'])
  }
  OnSubmit() {
    this.studentService.salvar(this.student).subscribe(response => {
      this.sucess = true;
      this.error = [];
      this.student = response;
    }, errorResponse => {
      this.sucess = false;
      this.error = [errorResponse.error.error];



    }
    )
  }
}
