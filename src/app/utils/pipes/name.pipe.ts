import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(personaje: any): string {
    if (personaje && personaje.nombre && personaje.region) {
      const nombre = personaje.nombre.charAt(0).toUpperCase() + personaje.nombre.slice(1);
      const region = personaje.region.charAt(0).toUpperCase() + personaje.region.slice(1);
      return `${nombre} de ${region}`;
    }
    return '';
  }
}
