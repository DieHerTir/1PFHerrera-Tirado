import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  login(username: string, password: string): boolean {
  //  this.getUser().subscribe({next:()=>{

  //  }})
  //   if (username === 'usuario' && password === 'contraseña') {
  //     sessionStorage.setItem('currentUser', JSON.stringify({ username }));
  //     return true;
  //   }
    return false;
  }

  logout(): void {

    sessionStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {

    return sessionStorage.getItem('currentUser') !== null;
  }
  getUsers(){
    return this.http.get("http://localhost:3000/users")
  }
}
