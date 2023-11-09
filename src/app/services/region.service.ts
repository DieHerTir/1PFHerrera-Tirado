import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface regionsFic{
  nombre: string,
  clima:string,
  plano:string
  ubicacion:string}
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getRegions():Observable<Object>{
    return this.http.get("http://localhost:3000/regions")
  }
}
