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

  constructor() { }
  getClasses():Observable<Classes[]>{
    return of([ {
      nombre: "Mago",
      tipo: "Mágica",
      descripcion: "Los magos son lanzadores de hechizos poderosos que utilizan magia para dañar a sus enemigos y controlar la realidad a su alrededor."
    },
    {
      nombre: "Guerrero",
      tipo: "Física",
      descripcion: "Los guerreros son expertos en el combate cuerpo a cuerpo, utilizan armaduras pesadas y armas letales para enfrentar a sus enemigos."
    },
    {
      nombre: "Pícaro",
      tipo: "Física",
      descripcion: "Los pícaros son maestros del sigilo y la astucia. Se especializan en el combate a corta distancia y en el robo de tesoros."
    },
    {
      nombre: "Cazador",
      tipo: "Física a distancia",
      descripcion: "Los cazadores son arqueros expertos que utilizan arcos y trampas para eliminar a sus presas desde lejos."
    },
    {
      nombre: "Sacerdote",
      tipo: "Mágica",
      descripcion: "Los sacerdotes son curanderos y lanzadores de hechizos benéficos. También pueden infligir daño divino a sus enemigos."
    },
    {
      nombre: "Paladín",
      tipo: "Física/Mágica",
      descripcion: "Los paladines son guerreros sagrados que combinan el combate con la magia divina para proteger a sus aliados y luchar contra el mal."
    },
    {
      nombre: "Brujo",
      tipo: "Mágica a distancia",
      descripcion: "Los brujos son maestros de las artes oscuras y utilizan la magia demoníaca para dañar a sus enemigos y controlar a los demonios."
    },
    {
      nombre: "Caballero",
      tipo: "Física",
      descripcion: "Los caballeros son expertos en el combate con espada y escudo. Son valientes defensores de la justicia y la nobleza."
    },
    {
      nombre: "Druida",
      tipo: "Mágica/Física",
      descripcion: "Los druidas son chamánicos y pueden transformarse en animales. Controlan la naturaleza y lanzan hechizos mágicos."
    },
    {
      nombre: "Chamán",
      tipo: "Mágica/Física",
      descripcion: "Los chamanes son intermediarios entre el mundo espiritual y el físico. Pueden lanzar hechizos de curación y daño."
    },
    {
      nombre: "Ladrón",
      tipo: "Física",
      descripcion: "Los ladrones son expertos en el sigilo y el robo. Pueden abrir cerraduras y desactivar trampas."
    },
    {
      nombre: "Mago de Sangre",
      tipo: "Mágica",
      descripcion: "Los magos de sangre utilizan la magia de sangre y la energía arcana para dañar a sus enemigos y mejorar sus propias habilidades."
    }])
  }
}
