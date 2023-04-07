import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../../curso.service'
import { Diretor } from 'src/app/diretor/diretor';
import { DiretorService } from '../../diretor.service'
import { Observable } from 'rxjs';
import { cursoProfBusca } from '../cursos-prof/cursoProfBusca';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  diretor: Diretor[] = []
  curso: Curso;
  
  

  sucess: boolean = false;
  error: String[];
  id: number;

  constructor(private diretorService: DiretorService,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.curso = new Curso();

  }


  ngOnInit(): void {
    this.diretorService.getDiretor().subscribe(response => this.diretor = response);
    let params : Observable<Params>= this.activatedRoute.params
    params.subscribe(urlParams => {  
      this.id = urlParams['id'];
      if(this.id){
        this.cursoService.getCursoById(this.id).subscribe(
          response => this.curso = response,
          errorResponse => this.curso = new Curso());
      }
     
      }
    )
    
  }

  voltarParaListagem(){
    this.router.navigate(['/cursos-lista'])

  }

  OnSubmit() {
    if(this.id){
      this.cursoService.atualizar(this.curso).subscribe(response => {
        this.sucess = true;
        this.error = [];
      }, errorResponse => {
        this.error = ['erro ao atualizar o Curso']
      })

    }else{
      this.cursoService.salvar(this.curso).subscribe(response => {
        this.sucess = true;
        this.error = [];
        this.curso = response;
      }, errorResponse => {
        this.sucess = false;
        this.error = [errorResponse.error.error];
  
  
  
      } )
    }


}

}
