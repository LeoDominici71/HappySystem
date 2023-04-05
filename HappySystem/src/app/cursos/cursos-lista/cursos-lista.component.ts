import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { Curso } from '../curso';
import { CursoService } from 'src/app/curso.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent {

  cursos: Curso[] = [];

  constructor(private service: CursoService, private router: Router) { }

  ngOnInit(): void{
  this.service.getDiretor().subscribe( response => this.cursos = response);
  }
  novoCadastro(){
    this.router.navigate(['/cursos-form'])
  }

}
