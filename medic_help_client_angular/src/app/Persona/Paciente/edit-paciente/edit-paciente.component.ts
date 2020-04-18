import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Paciente} from "../../../modules/Paciente";
import { AddPacienteService } from 'src/app/services/persona/paciente/add-paciente.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  paciente_id:number; //1
  paciente:Paciente; 
  pacientes:Paciente[]=[];

  type_o:string;
  sexo_o:string;

  ci:number;
  nombre:string;
  apellido:string;
  fecha_nacimiento:Date;
  email: string;
  telefono:number;
  type: string;
  estado: boolean;
  sexo:string;
  title:string;

  formSubmitted:boolean=false;


  constructor(private route:ActivatedRoute,private r : Router,private es:AddPacienteService) { 
  this.title="";
  }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.paciente_id=data['id'];
      console.log(this.paciente_id);
    });
    this.getOne();
  }


  getOne(){
    this.es.getOnePaciente(this.paciente_id).subscribe((data)=>{
      
      this.pacientes=data;
      this.paciente=this.pacientes['0'];
      console.log(this.paciente);
    });
  }

  editPaciente(){
    this.formSubmitted=true;
    this.es.editPaciente(this.paciente).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
