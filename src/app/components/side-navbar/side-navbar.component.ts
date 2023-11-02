
import { Component, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { TableCharactersComponent } from '../table-characters/table-characters.component';
import { CharactersService } from '../../services/characters-service.service';
import { filter, map, Subscription, take } from 'rxjs';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnDestroy {
  showFiller = false;
  newCharacter: any
  counter: number = 0
  counterSubscription!: Subscription
  notificationSubscription!: Subscription
  @ViewChild(TableCharactersComponent) tableCharactersComponent!: TableCharactersComponent;
  numberOfCharacters: number = this.tableCharactersComponent?.dataSource.length
  totalRegistrosHijo = 0;
  constructor(private zone: NgZone, private dialog: MatDialog, private charactersService: CharactersService) {
    this.counterSubscription = this.charactersService.getSeconds().subscribe({
      next: (v) => { this.counter = v },

    })
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    if (this.notificationSubscription)
      this.notificationSubscription.unsubscribe();
  }




}
