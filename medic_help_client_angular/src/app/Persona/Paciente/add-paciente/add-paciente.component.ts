import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { AddPacienteService } from "../../../services/persona/paciente/add-paciente.service";

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  formSubmitted:boolean=false;

  ci:number;
  nombre:string;
  apellido:string;
  fecha_nacimiento:Date;
  email: string;
  telefono:number;
  estado: string='a';
  sexo:string;
  nro_seguro:string;
  title:string;

  constructor(private es:AddPacienteService) { 
    this.title="";
  }

  ngOnInit() {
  }

  addPaciente(){
    this.formSubmitted=true;
    this.estado='a';
    this.es.addPaciente(this.nombre,this.apellido,this.ci,this.telefono,this.fecha_nacimiento,this.email,this.sexo,this.nro_seguro,this.estado).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
