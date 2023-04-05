import { Component } from '@angular/core';
import { Grade } from '../grade';
import { GradesService } from 'src/app/grades.service';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent {

grade: Grade;
sucess: boolean = false;
error: String[];

constructor(private gradesService: GradesService) {
  this.grade = new Grade();
  this.error = [];
}
  ngOnInit(): void{

  }

  OnSubmit() {
    this.gradesService.salvar(this.grade).subscribe(response => {
      this.sucess = true;
      this.error = [];
      this.grade = response;
    }, errorResponse => {
      this.sucess = false;
      this.error = [errorResponse.error.error];
  
  
  
    }
    )
  }
}
