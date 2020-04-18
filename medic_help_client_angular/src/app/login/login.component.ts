import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  peticiones: LoginService;
  email: string;
  password: string;
  response: string;
  wrongPassword: string;
  wrongEmail: string;
  available: string;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  title: string;
  formSubmitted:boolean;
  constructor(
    private http: HttpClient,
    private _router: Router,
  ) {
    localStorage.setItem("showNavbar", "no");
    this.title = "";
    this.available = "yes";
    this.formSubmitted=false;
  }
  ngOnInit() {
    localStorage.removeItem("loggedPersonName");
  }
  validateLogin() {
    this.available="no";
    const userSend = '{"email":"' + this.email + '","password":"' + this.password + '"}';
    this.http.post(`https://medic-help-serve.herokuapp.com/api/login`, userSend, { headers: this.headers }).subscribe(
      response => {
        console.log("OK");
      },
      error => {
        try {
          this.response = error.error.text.toString();
          this.wrongPassword = "";
          this.wrongEmail = "";
          if (this.response == "Usuario no existe") {
            this.wrongEmail = "Usuario no existe";
          } else if (this.response == "Contraseña Incorrecta") {
            this.wrongPassword = "Contraseña incorrecta";
          } else if (this.response == "Loged In") {
            localStorage.setItem("showNavbar", "yes");
            localStorage.setItem("loggedPersonName", this.email);
            this._router.navigate(['/index']);
          } else {
            alert("En mantenimiento...");
          }
        } catch (e) {
          alert("Fallo en la petición");
        } finally {
          this.available="yes";
        }
      });
  }
  isAvailable(): boolean {
    return this.available=="yes";
  }
}
