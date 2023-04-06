import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Student } from '../student'
import { StudentsServiceService } from '../../students-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent {
  student: Student;
  sucess: boolean = false;
  error: String[];
  matricula: number;

  constructor(private studentService: StudentsServiceService,
     private router: Router,
     private activatedRoute : ActivatedRoute) {
    this.student = new Student();
    this.error = [];
  }

  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params
    params.subscribe(urlParams => {  
      this.matricula = urlParams['matricula'];
      if(this.matricula){
        this.studentService.getStudentById(this.matricula).subscribe(
          response => this.student = response,
          errorResponse => this.student = new Student());
      }
     
      }
    )
  }

  

  voltarParaListagem(){
    this.router.navigate(['/students-lista'])
  }

  OnSubmit() {
    if(this.matricula){
      this.studentService.atualizar(this.student).subscribe(response => {
        this.sucess = true;
        this.error = [];
      }, errorResponse => {
        this.error = ['erro ao atualizar o estudante']
      })

    }else{
      this.studentService.salvar(this.student).subscribe(response => {
        this.sucess = true;
        this.error = [];
        this.student = response;
      }, errorResponse => {
        this.sucess = false;
        this.error = [errorResponse.error.error];
  
  
  
      } )
    }
    
   
  }

}

