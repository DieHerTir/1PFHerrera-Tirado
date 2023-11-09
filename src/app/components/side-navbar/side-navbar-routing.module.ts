import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCharactersComponent } from '../table-characters/table-characters.component';
import { RegionsComponent } from '../regions/regions.component';
import { ClassesComponent } from '../classes/classes.component';
import { SideNavbarComponent } from './side-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavbarComponent, 
    children: [
      { path: 'table', component: TableCharactersComponent },
      { path: 'regions', component: RegionsComponent },
      { path: 'classes', component: ClassesComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavbarRoutingModule { }
