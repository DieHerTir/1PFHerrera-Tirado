import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {authGuard} from "./guards/auth.guard"
const routes: Routes = [{path:"login",component:LoginComponent},
  { path: 'dashboard', 
loadChildren: () => import('./components/side-navbar/side-navbar.module').then((m) => m.SideNavbarModule),
canActivate: [authGuard] },

{path:"",component:LoginComponent},
{path:"**",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
