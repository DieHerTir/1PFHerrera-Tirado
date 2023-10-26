import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
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

  constructor() { }
getSeconds():Observable<number>{
  return interval(1000)

}
  getCharacters():Observable<Character[]>{
    return of([
      { id: 1, nombre: "Minsc", clase: "Bárbaro", raza: "Humano", region: "Rashemen", principalStat: "Fuerza" },
      { id: 2, nombre: "Imoen", clase: "Pícaro", raza: "Humano", region: "Candlekeep", principalStat: "Destreza" },
      { id: 3, nombre: "Viconia", clase: "Clérigo", raza: "Elfa Drow", region: "Drow", principalStat: "Sabiduría" },
      { id: 4, nombre: "Jaheira", clase: "Druida", raza: "Humano", region: "Amn", principalStat: "Sabiduría" },
      { id: 5, nombre: "Edwin", clase: "Mago", raza: "Humano", region: "Thay", principalStat: "Inteligencia" },
      { id: 6, nombre: "Khalid", clase: "Guerrero", raza: "Humano", region: "Candlekeep", principalStat: "Fuerza" },
      { id: 7, nombre: "Dynaheir", clase: "Maga", raza: "Humano", region: "Rashemen", principalStat: "Inteligencia" },
      { id: 8, nombre: "Kivan", clase: "Explorador", raza: "Elfo", region: "Bosque de Chionthar", principalStat: "Destreza" },
      { id: 9, nombre: "Alora", clase: "Pícaro", raza: "Gnomo", region: "Ciudad de Baldur", principalStat: "Carisma" },
      { id: 10, nombre: "Xan", clase: "Mago", raza: "Humano", region: "Rashemen", principalStat: "Inteligencia" },
      { id: 11, nombre: "Baeloth", clase: "Hechicero", raza: "Humano", region: "Zakharan", principalStat: "Carisma" },
      { id: 12, nombre: "Voghiln", clase: "Bardo", raza: "Humano", region: "Calimshan", principalStat: "Carisma" },
      { id: 13, nombre: "Shar-Teel", clase: "Guerrero", raza: "Humano", region: "Ciudad de Baldur", principalStat: "Fuerza" },
      { id: 14, nombre: "Safana", clase: "Pícaro", raza: "Humano", region: "Ciudad de Baldur", principalStat: "Destreza" },
      { id: 15, nombre: "Tiax", clase: "Hechicero", raza: "Humano", region: "Thay", principalStat: "Carisma" },
      { id: 16, nombre: "Coran", clase: "Pícaro", raza: "Elfo", region: "Bosque de Chionthar", principalStat: "Destreza" },
      { id: 17, nombre: "Xzar", clase: "Nigromante", raza: "Humano", region: "Candlekeep", principalStat: "Inteligencia" },
      { id: 18, nombre: "Montaron", clase: "Pícaro", raza: "Enano", region: "Candlekeep", principalStat: "Destreza" },
      { id: 19, nombre: "Dorn Il-Khan", clase: "Paladín", raza: "Mediano", region: "Rashemen", principalStat: "Fuerza" },
      { id: 20, nombre: "Branwen", clase: "Clérigo", raza: "Humano", region: "Rashemen", principalStat: "Sabiduría" },
      { id: 21, nombre: "Xzar", clase: "Nigromante", raza: "Humano", region: "Candlekeep", principalStat: "Inteligencia" },
      { id: 22, nombre: "Garrick", clase: "Bardo", raza: "Humano", region: "Nashkel", principalStat: "Carisma" },
      { id: 23, nombre: "Neera", clase: "Hechicero", raza: "Humano", region: "Amn", principalStat: "Carisma" },
      { id: 24, nombre: "Kagain", clase: "Guerrero", raza: "Enano", region: "Ciudad de Baldur", principalStat: "Fuerza" },
      { id: 25, nombre: "Bubu", raza: "Hámster Gigante", clase: "Mascota", region: "Baldur's Gate", principalStat: "Carisma" }
    ]
    )
  }

  getNotifications():Observable<any>{
    return interval(1000)
  }
}