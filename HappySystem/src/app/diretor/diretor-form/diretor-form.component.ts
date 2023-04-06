import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Diretor } from '../diretor';
import { DiretorService } from '../../diretor.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent {
  diretor: Diretor;
  sucess: boolean = false;
  error: String[];
  matricula: number;

  constructor(private service: DiretorService,
              private router: Router,
              private activatedRoute : ActivatedRoute  ) {
    this.diretor = new Diretor();
    this.error = [];
  }

  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params
    params.subscribe(urlParams => {  
      this.matricula = urlParams['matricula'];
      if(this.matricula){
        this.service.getDiretorById(this.matricula).subscribe(
          response => this.diretor = response,
          errorResponse => this.diretor = new Diretor());
      }
     
      }
    )
  }

  

  voltarParaListagem(){
    this.router.navigate(['/diretor-lista'])
  }

  OnSubmit() {
    if(this.matricula){
      this.service.atualizar(this.diretor).subscribe(response => {
        this.sucess = true;
        this.error = [];
      }, errorResponse => {
        this.error = ['erro ao atualizar o professor']
      })

    }else{
      this.service.salvar(this.diretor).subscribe(response => {
        this.sucess = true;
        this.error = [];
        this.diretor = response;
      }, errorResponse => {
        this.sucess = false;
        this.error = [errorResponse.error.error];
  
  
  
      } )
    }
    
   
  }

}
