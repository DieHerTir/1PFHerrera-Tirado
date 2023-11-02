import { Component } from '@angular/core';
import { ClassesService } from '../../services/classes.service';
import { Observable } from 'rxjs';
export interface Classes{
  nombre:string,
  tipo:string,
  descripcion:string
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  displayedColumns: string[] = ['nombre', 'tipo', 'descripcion'];
  classe$!:Observable<Classes[]>
  classes!:Classes[]
  loader =false
  constructor(ClassesService:ClassesService){
    this.classe$ = ClassesService.getClasses()
    this.classe$.subscribe(data=>{
      this.classes = data
    })
  }
}
