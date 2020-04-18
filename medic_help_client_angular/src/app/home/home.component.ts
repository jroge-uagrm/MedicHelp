import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {UserModel}from '../login/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck,OnDestroy{
  public title:string;
  public txt:string;
  // public users:Array<UserModel>;
  public user:UserModel;
  constructor() {
    this.user=new UserModel('','');
    localStorage.setItem("showNavbar","no");
  }
  ngOnInit() {
    this.title="Home";
  }
  ngDoCheck(){
  }
  cambiarTitulo(){
    this.title="Home";
  }
  ngOnDestroy(){
  }
  validateLogin(){
  }
}
