import { Injectable } from '@angular/core';
import { Student } from './students/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  constructor(private http: HttpClient ) {
   }

   salvar(student: Student) : Observable<Student> {
    return this.http.post<Student>('http://localhost:8081/students',student);
   }

   atualizar(student: Student) : Observable<any> {
    return this.http.put<Student>(`http://localhost:8081/students/${student.matricula}`,student);
   }

   getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8081/students');
 }

 getStudentById(matricula: number) : Observable<Student>{
  return this.http.get<any>(`http://localhost:8081/students/${matricula}`);
 }

 deletar(student: Student): Observable<any>{
  return this.http.delete<any>(`http://localhost:8081/students/${student.matricula}`);
 }
}
