import { Injectable } from '@angular/core';
import { Grade } from './grades/grade';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { gradesLista } from './grades/grades-lista/gradesLista';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  apiURL: string = environment.apiURL + "/grades"

  constructor(private http: HttpClient) {

  }

  salvar(grade: Grade) : Observable<Grade> {
    return this.http.post<Grade>(this.apiURL,grade);
   }

   getCursoStudent(studentNome: string, cursoNome: string): Observable<gradesLista[]>{
    const httpParams = new HttpParams().set("studentNome", studentNome ? studentNome.toString(): '').set("cursoNome", cursoNome ? cursoNome.toString(): '');
    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<gradesLista[]>(url);
   }

   
}