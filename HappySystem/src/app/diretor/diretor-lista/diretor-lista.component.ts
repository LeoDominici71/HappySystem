import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Diretor } from '../diretor';
import { DiretorService } from 'src/app/diretor.service';

@Component({
  selector: 'app-diretor-lista',
  templateUrl: './diretor-lista.component.html',
  styleUrls: ['./diretor-lista.component.css']
})
export class DiretorListaComponent {

  diretors: Diretor[] = [];
  diretorSelecionado: Diretor;

  constructor(private service: DiretorService, private router: Router) {
  }


  ngOnInit(): void{
     this.service.getDiretor().subscribe(response => this.diretors = response);
  }

  novoCadastro(){
    this.router.navigate(['/diretor-form'])
  }

  preparaDelecao(diretor: Diretor){
    this.diretorSelecionado = diretor; 
  }



}
