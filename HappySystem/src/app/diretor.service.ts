import { Injectable } from '@angular/core';
import { Diretor } from './diretor/diretor';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  apiURL: string = environment.apiURL + '/professors'

  constructor(private http: HttpClient) {

   }

   salvar(diretor: Diretor) : Observable<Diretor> {
    return this.http.post<Diretor>(`${this.apiURL}`, diretor);
   }

   atualizar(diretor: Diretor) : Observable<any> {
    return this.http.put<Diretor>(`${this.apiURL}/${diretor.matricula}`,diretor);
   }
   
   getDiretor(): Observable<Diretor[]> {
    return this.http.get<Diretor[]>(`${this.apiURL}`);
 }

 getDiretorById(matricula: number) : Observable<Diretor>{
  return this.http.get<any>(`${this.apiURL}/${matricula}`);
 }

 deletar(diretor: Diretor): Observable<any>{
  return this.http.delete<any>(`${this.apiURL}/${diretor.matricula}`);
 }
 
}
