import { Injectable } from '@angular/core';
import { Curso } from './cursos/curso';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { cursoListaBusca } from './cursos/cursos-lista/cursoListaBusca';
import { cursoProfBusca } from './cursos/cursos-prof/cursoProfBusca';

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

  atualizar(curso: Curso) : Observable<Curso> {
    return this.http.post<Curso>(`${this.apiURL}`,curso);
   }

   getNome(nome: string): Observable<cursoProfBusca[]>{
    const httpParams = new HttpParams().set("nome", nome);
    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
   }

  getCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiURL}/all`);
 }

 getCursoLista(): Observable<cursoListaBusca[]>{
  return this.http.get<cursoListaBusca[]>(`${this.apiURL}`);
 }

 getCursoById(id: number) : Observable<Curso>{
  return this.http.get<any>(`${this.apiURL}/${id}`);
 }

 deletar(curso: Curso): Observable<any>{
  return this.http.delete<any>(`${this.apiURL}/${curso.id}`);
 }
}
