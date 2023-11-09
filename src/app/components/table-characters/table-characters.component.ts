import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, OnInit } from '@angular/core';

import { AlertServiceService } from 'src/app/services/alert-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../loader/loader.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { CharactersService } from '../../services/characters-service.service';
import { Observable, of } from 'rxjs';

export interface Character{
  id:number,
  clase: string, 
  raza: string, 
  region: string,
  principalStat: string
}
@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.scss']
})
export class TableCharactersComponent {
  displayedColumns: string[] = ['Nombre', 'Raza', 'Clase', 'stat', 'acciones'];
  dataSource!:any
  loader = false
  total = 0;
  characters$!:Observable<Object>
  characters!: any
  @Input() newCharacter: any;
  @Output() totalRegistros = new EventEmitter<number>();
  constructor(public alert: AlertServiceService, 
    private cdr: ChangeDetectorRef, 
    private dialog: MatDialog, 
    private characterService:CharactersService ) {
      this.characters$ = this.characterService.getCharacters()
        this.characters$.subscribe(data => {
          console.log(data)
      this.characters = data; 
      this.dataSource = data
    });
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if ('newCharacter' in changes) {
      const newCharacter = changes['newCharacter'].currentValue;
      if (newCharacter) {
        console.log('Nuevo Personaje en el componente hijo:', newCharacter);
        let aux = this.dataSource.slice();
        newCharacter.id = this.generateNewId(aux)
        aux.push(newCharacter);
        this.characters.push(newCharacter);
        const dialogRef = this.dialog.open(LoaderComponent, {
          disableClose: true,
          panelClass: 'custom-loader-dialog',
        });
        setTimeout(() => {
          dialogRef.close();
          this.dataSource = aux;
          this.cdr.detectChanges()
          this.total = this.characters.length
          this.totalRegistros.emit(this.total);
        }, 300);
      }

    }

  }
  mostrarLoader() {
    const dialogRef = this.dialog.open(LoaderComponent, {
      disableClose: true,
      panelClass: 'custom-loader-dialog',
    });


    setTimeout(() => {
      dialogRef.close();
    }, 5000);
  }
  generateNewId(characters: any) {
    let maxId = 0;

    characters.forEach((character: any) => {
      if (character.id > maxId) {
        maxId = character.id;
      }
    });

    return maxId + 1;
  }
  settingId(): number {

    return this.dataSource[this.dataSource.length - 1].id++
  }

  deleteCharacter(id: number, name: string) {
    this.alert.deleteElement(name).then((result) => {
      if (result.isConfirmed) {
        const dialogRef = this.dialog.open(LoaderComponent, {
          disableClose: true,
          panelClass: 'custom-loader-dialog',
        });
        setTimeout(() => {
         
          dialogRef.close()
          this.characterService.deleteCharacter(id).subscribe({
            next: (response) => {
              const INDEX = this.dataSource.findIndex((character:any) => character.id === id);
              if (INDEX !== -1) {
               let aux= this.dataSource.filter((character:any) => character.id !== id);
                this.dataSource = aux
                this.cdr.detectChanges()
              
                this.totalRegistros.emit(this.total);
              }
              this.alert.success()
            },
            error: (error) => {
            this.alert.genericSwal("Error","algo salió mal con la petición","error")
            },
          });
          this.alert.success()
        }, 500);
      }
    })
  }
  editCharacter(id: number): void {
    let edit = this.dataSource.find((personaje:any) => personaje.id === id);
    console.log(edit)
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '800px',
      disableClose: true,
      data: { action: 1, character: edit }
    });


    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
       
        const index = this.dataSource.findIndex((personaje:any) => personaje.id === id);
        if (index !== -1) {
          this.characterService.updateCharacter(result,id).subscribe({next:(response)=>{
            let aux = this.dataSource.slice();
            result.id = id
            aux[index] = result;
            this.dataSource = aux;
            this.cdr.detectChanges()
            this.alert.success()
          },error:()=>{
            this.alert.genericSwal("Error","Ha ocurrido un error con la petición","error")
          }})
         
        }

      }
      console.log(this.dataSource)
    });
  }
  addCharacter() {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '800px',
      disableClose: true,
      data: { action: 0 }
    });


    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {       
        this.characterService.addCharacter(result).subscribe({
          next: (response) => {
            this.newCharacter = result;
            let aux = this.dataSource.slice();
            aux.push(this.newCharacter)
            this.dataSource = aux 
            this.cdr.detectChanges(); 
            dialogRef.close();
            this.alert.success()
          },
          error: (error) => {
          this.alert.genericSwal("Error","algo salió mal con la petición","error")
          },
        });
     
      }
    });

  }

}
