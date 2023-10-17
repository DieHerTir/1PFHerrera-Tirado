import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCharactersComponent } from './table-characters.component';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NamePipe } from 'src/app/utils/pipes/name.pipe';



@NgModule({
  declarations: [TableCharactersComponent,NamePipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    
  ],
  exports:[
    TableCharactersComponent
  ]
})
export class TableCharactersModule { }