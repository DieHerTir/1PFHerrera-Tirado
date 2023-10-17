
import { Component, NgZone, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { TableCharactersComponent } from '../table-characters/table-characters.component';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  showFiller = false;
  newCharacter: any
  @ViewChild(TableCharactersComponent) tableCharactersComponent!: TableCharactersComponent;
  numberOfCharacters: number = this.tableCharactersComponent?.dataSource.length
  totalRegistrosHijo = 0;
  constructor(private zone: NgZone, private dialog: MatDialog) {}

  actualizarTotalRegistros(total: number) {
    this.zone.run(() => {
      setTimeout(() => {
        this.totalRegistrosHijo = total;
      });
    });
  }
  addCharacter() {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '800px', 
      data: { action:0 }
    });
  
    
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){

        console.log('El modal se cerró', result);
        this.newCharacter = result
      }
     
    });

  }


}
