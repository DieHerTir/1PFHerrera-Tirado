import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private alert: AlertServiceService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      let isLogged = false;
      this.authService.getUsers().subscribe({
       next: (response:any) => {
         isLogged = response.some((userObj:any) => {
           console.log(userObj)
           return userObj.user == username && userObj.password == password});
           if(isLogged){
            sessionStorage.setItem("currentUser","user")
            this.router.navigate(['/dashboard']);
           }
          
           else{
            this.alert.genericSwal("Error","Las credenciales son incorrectas","error")
           }
       }, error: (error:any) => {
         this.alert.genericSwal("Error","Algo salió mal en la petición","error")
       
       }
      })
   
    }
  }
}
