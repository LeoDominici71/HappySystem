import { Injectable } from '@angular/core';
import { Curso } from './cursos/curso';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) {

  }

  salvar(curso: Curso) : Observable<Curso> {
   return this.http.post<Curso>('http://localhost:8081/cursos',curso);
  }

  getDiretor(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:8081/cursos');
 }
}
