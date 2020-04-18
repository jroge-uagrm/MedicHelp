import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ListEmpleadoService } from "../../../services/persona/empleado/list-empleado.service";

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  formSubmitted:boolean=false;

  ci:number;
  nombre:string;
  apellido:string;
  fecha_nacimiento:Date;
  email: string;
  telefono:number;
  type: string;
  estado?: string='a';
  sexo:string;
 title:string;
  constructor(private es:ListEmpleadoService) {
    this.title="";
  }

  ngOnInit() {
  }

  addEmpleado(){
    this.formSubmitted=true;
    this.es.addEmpleado(this.nombre,this.apellido,this.ci,this.telefono,this.fecha_nacimiento,this.email,this.sexo,this.type,this.estado).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
