import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const currentUser = sessionStorage.getItem('currentUser');
  if (currentUser && currentUser === 'user') {
   
    return true;}
    else {
    
      inject(Router).navigateByUrl('/login');
      return false;
    }

};
