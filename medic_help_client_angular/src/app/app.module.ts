import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEmpleadoComponent } from './Persona/Empleado/add-empleado/add-empleado.component';

import { AddPacienteComponent } from './Persona/Paciente/add-paciente/add-paciente.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditEmpleadoComponent } from './Persona/Empleado/edit-empleado/edit-empleado.component';
import { EditPacienteComponent } from './Persona/Paciente/edit-paciente/edit-paciente.component';
import { ListPacienteComponent } from './Persona/Paciente/list-paciente/list-paciente.component';
import { ListEmpleadoComponent } from './Persona/Empleado/list-empleado/list-empleado.component';
import { AddEmpleadoEspecialidadComponent } from './empleado-especialidad/add-empleado-especialidad/add-empleado-especialidad.component';
import { NavbarInsideComponent } from './navbar-inside/navbar-inside/navbar-inside.component';
//Añadido por Jroge
import {HomeComponent}from './home/home.component';
import {IndexComponent}from './index/index.component';
import {NotFoundComponent}from './not-found/not-found.component';
import {ListEmpleadoEspecialidadComponent}from './empleado-especialidad/list-empleado-especialidad/list-empleado-especialidad.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    AddPacienteComponent,
    LoginComponent,
    NavbarComponent,
    EditEmpleadoComponent,
    EditPacienteComponent,
    ListPacienteComponent,
    ListEmpleadoComponent,
    AddEmpleadoEspecialidadComponent,
    NavbarInsideComponent,
    HomeComponent,
    IndexComponent,
    NotFoundComponent,
    ListEmpleadoEspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
