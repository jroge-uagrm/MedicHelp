import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AddEmpleadoComponent } from './Persona/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './Persona/Empleado/edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './Persona/Empleado/list-empleado/list-empleado.component';

import { AddPacienteComponent } from './Persona/Paciente/add-paciente/add-paciente.component';
import { EditPacienteComponent } from './Persona/Paciente/edit-paciente/edit-paciente.component';
import { ListPacienteComponent } from './Persona/Paciente/list-paciente/list-paciente.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddEmpleadoEspecialidadComponent } from './empleado-especialidad/add-empleado-especialidad/add-empleado-especialidad.component';
import { ListEmpleadoEspecialidadComponent } from './empleado-especialidad/list-empleado-especialidad/list-empleado-especialidad.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: '' , redirectTo: 'login' , pathMatch: 'full'},
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addempleado',
    component:AddEmpleadoComponent
  },
  {
    path:'editempleado/:id',
    component:EditEmpleadoComponent
  },
  {
    path:'listempleado',
    component:ListEmpleadoComponent
  },
  {
    path:'addpaciente',
    component:AddPacienteComponent
  },
  {
    path:'editpaciente/:id',
    component:EditPacienteComponent
  },
  {
    path:'listpaciente',
    component:ListPacienteComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'index/:loggedPersonName', component: IndexComponent },
  { path: 'addespecialidad', component: AddEmpleadoEspecialidadComponent },
  { path: 'listespecialidades', component: ListEmpleadoEspecialidadComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
