import { Injectable } from '@angular/core';
import { Diretor } from './diretor/diretor';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  constructor(private http: HttpClient) {

   }

   salvar(diretor: Diretor) : Observable<Diretor> {
    return this.http.post<Diretor>('http://localhost:8081/professors',diretor);
   }

   atualizar(diretor: Diretor) : Observable<any> {
    return this.http.put<Diretor>(`http://localhost:8081/professors/${diretor.matricula}`,diretor);
   }
   
   getDiretor(): Observable<Diretor[]> {
    return this.http.get<Diretor[]>('http://localhost:8081/professors');
 }

 getDiretorById(matricula: number) : Observable<Diretor>{
  return this.http.get<any>(`http://localhost:8081/professors/${matricula}`);
 }
 
}
