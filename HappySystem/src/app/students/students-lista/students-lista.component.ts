import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentsServiceService } from 'src/app/students-service.service';

@Component({
  selector: 'app-students-lista',
  templateUrl: './students-lista.component.html',
  styleUrls: ['./students-lista.component.css']
})
export class StudentsListaComponent {

  students: Student[] = [];
  studentSelecionado: Student;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: StudentsServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getStudents().subscribe(response => this.students = response);
  }

  novoCadastro(){
    this.router.navigate(['/students-form'])
  }

  preparaDelecao(student: Student){
    this.studentSelecionado = student; 
  }

  deletarStudent(){
    this.service
    .deletar(this.studentSelecionado)
    .subscribe( response => {
      this.mensagemSucesso = 'Estudente deletado(a) com sucesso!'
      this.ngOnInit();
    },
                erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Estudante')
  }


}
