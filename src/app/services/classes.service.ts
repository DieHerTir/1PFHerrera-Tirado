import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Classes{
  nombre:string,
  tipo:string,
  descripcion:string
}
@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }
  getClasses():Observable<Object>{
    return this.http.get("http://localhost:3000/classes")
  }
}
