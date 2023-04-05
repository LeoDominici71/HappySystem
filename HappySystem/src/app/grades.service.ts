import { Injectable } from '@angular/core';
import { Grade } from './grades/grade';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) {

  }

  salvar(grade: Grade) : Observable<Grade> {
    return this.http.post<Grade>('http://localhost:8081/grades',grade);
   }

   getGrade(): Grade {
    let grade: Grade = new Grade();
    grade.studentId = 1;
    grade.courseId = 1;
    grade.grades = 9;
    return grade;
 
  }
}