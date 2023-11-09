import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor() { }

  genericSwal(tittle:string,text:string,icon:"success"|"error"|"info"){
    return Swal.fire({
      title:tittle,
      text: text,
      icon: icon,
      showCancelButton: false,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#ff4081',
      confirmButtonText:'Aceptar',
     
    });
  }

  deleteElement(nombre: string) {
    return Swal.fire({
      title:'¿Deseas borrar el personaje'+ nombre+ ' ?',
      text: 'Se borrará del arreglo dataSource, cuando se actualice la página volverá a aparecer',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#ff4081',
      confirmButtonText:'Aceptar',
      cancelButtonText: 'Cancelar',
    });
  }

  success(){
    return Swal.fire({
      title:'Éxito',
      text: 'La acción se ejecuto correctamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#ff4081',
      confirmButtonText:'Aceptar',
     
    });
  }
}
