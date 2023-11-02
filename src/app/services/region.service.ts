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

  constructor() { }

  getRegions():Observable<regionsFic[]>{
    return of([
      {
        nombre: "Ciudad de Baldur",
        clima: "Templado",
        plano: "Material",
        ubicacion: "Reinos Olvidados"
      },
      {
        nombre: "Orgrimmar",
        clima: "Árido",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Riften",
        clima: "Frío",
        plano: "Nirn",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Tristram",
        clima: "Tenebroso",
        plano: "Material",
        ubicacion: "Sanctuary (Diablo)"
      },
      {
        nombre: "Zul'Gurub",
        clima: "Húmedo",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Anvil",
        clima: "Costero",
        plano: "Material",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Stormwind",
        clima: "Templado",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Solstheim",
        clima: "Gélido",
        plano: "Nirn",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Tranquilidad",
        clima: "Despejado",
        plano: "Material",
        ubicacion: "Reinos Olvidados"
      },
      {
        nombre: "Nagrand",
        clima: "Árido",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Morrowind",
        clima: "Áspero",
        plano: "Nirn",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Whiterun",
        clima: "Frío",
        plano: "Nirn",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Ironforge",
        clima: "Subterráneo",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Calimshan",
        clima: "Árido",
        plano: "Material",
        ubicacion: "Reinos Olvidados"
      },
      {
        nombre: "Eversong Woods",
        clima: "Boscoso",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Anvil",
        clima: "Costero",
        plano: "Material",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Astranaar",
        clima: "Boscoso",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Imperial City",
        clima: "Templado",
        plano: "Nirn",
        ubicacion: "Tamriel (The Elder Scrolls)"
      },
      {
        nombre: "Blackrock Mountain",
        clima: "Volcánico",
        plano: "Material",
        ubicacion: "Azeroth (World of Warcraft)"
      },
      {
        nombre: "Anvil",
        clima: "Costero",
        plano: "Material",
        ubicacion: "Tamriel (The Elder Scrolls)"
      }
    ]
    )
  }
}
