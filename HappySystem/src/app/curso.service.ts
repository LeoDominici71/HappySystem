import { Injectable } from '@angular/core';
import { Curso } from './cursos/curso';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiURL: string = environment.apiURL + '/cursos'

  constructor(private http: HttpClient) {

  }

  salvar(curso: Curso) : Observable<Curso> {
   return this.http.post<Curso>(`${this.apiURL}`,curso);
  }

  getDiretor(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiURL}`);
 }
}
