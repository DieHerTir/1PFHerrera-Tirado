import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Character{
  id:number,
  clase: string, 
  raza: string, 
  region: string,
  principalStat: string
}
@Injectable({
  providedIn: 'root'
})
export class CharactersService{

  constructor(private http: HttpClient) { }
getSeconds():Observable<number>{
  return interval(1000)

}
  getCharacters():Observable<Object>{
   return this.http.get("http://localhost:3000/characters")
  }
  deleteCharacter(id: number): Observable<Object> {
    return this.http.delete("http://localhost:3000/characters/"+id)
  }
  addCharacter(character:Character){
    return this.http.post("http://localhost:3000/characters/",character)
  }
  updateCharacter(character:Character, id:number){
    return this.http.patch("http://localhost:3000/characters/"+id,character)
  }

  getNotifications():Observable<any>{
    return interval(1000)
  }
}
