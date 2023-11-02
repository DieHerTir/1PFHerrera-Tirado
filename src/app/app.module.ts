import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TableCharactersComponent } from './components/table-characters/table-characters.component';
import { MatTableModule } from '@angular/material/table';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TableCharactersModule } from './components/table-characters/table-characters.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LoaderComponent } from './components/loader/loader.component';
import { RegionsComponent } from './components/regions/regions.component';
import { ClassesComponent } from './components/classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    ModalFormComponent,
    LoaderComponent,
    RegionsComponent,
    ClassesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    TableCharactersModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
