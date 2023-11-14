import { Component, OnInit } from '@angular/core';
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
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'tipo', 'descripcion'];
  classe$!:Observable<Object>
  classes!:any
  loader =false
  constructor(private ClassesService:ClassesService){
   
  } 
  ngOnInit(): void {
    this.classe$ = this.ClassesService.getClasses()
    this.classe$.subscribe(data=>{
      this.classes = data
    })
  }
}
