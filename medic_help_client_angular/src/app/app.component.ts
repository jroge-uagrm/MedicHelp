import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medic-help-client';
  constructor(){
    
  }
  mostrar():boolean{
    return localStorage.getItem('showNavbar')=="yes"?true:false;
  }
}
