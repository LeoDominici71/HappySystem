import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../../curso.service'

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  curso: Curso;
  sucess: boolean = false;
  error: String[];

  constructor(private cursoService: CursoService, private router: Router) {
    this.curso = new Curso();
    this.error = [];
  }


  ngOnInit(): void{}

  voltarParaListagem(){
   this.router.navigate(['/cursos-lista'])
  }


OnSubmit() {
  this.cursoService.salvar(this.curso).subscribe(response => {
    this.sucess = true;
    this.error = [];
    this.curso = response;
  }, errorResponse => {
    this.sucess = false;
    this.error = [errorResponse.error.error];



  }
  )
}

}
