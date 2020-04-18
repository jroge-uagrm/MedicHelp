import { Component, OnInit } from '@angular/core';
import { ListEmpleadoService } from "../../../services/persona/empleado/list-empleado.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Empleado} from "../../../modules/Empleado";

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  empleado_id:number;
  empleado:Empleado; 
  empleados:Empleado[]=[];
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



  constructor(private route:ActivatedRoute,private r : Router,private es:ListEmpleadoService) { 
  this.title="";
  }

  
  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.empleado_id=data['id'];
      console.log(this.empleado_id);
    });
    this.getOne();
  }

  getOne(){
    this.es.getOneEmpleado(this.empleado_id).subscribe((data:any)=>{
      this.empleados=data;
      this.empleado=this.empleados['0'];
      if (this.empleado['sexo']=='m') {
        this.sexo_o='Masculino';
      }else if (this.empleado['sexo']=='f') {
        this.sexo_o='Femenino';
      }else{
        this.sexo_o='Otros';
      }

      
      console.log(this.empleado);
    });
  }

  editEmpleado(){
    this.formSubmitted=true;
    this.es.editEmpleado(this.empleado).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
