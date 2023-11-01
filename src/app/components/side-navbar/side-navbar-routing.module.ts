import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCharactersComponent } from '../table-characters/table-characters.component';

const routes: Routes =  [{
  path: 'table',
  component: TableCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavbarRoutingModule { }
