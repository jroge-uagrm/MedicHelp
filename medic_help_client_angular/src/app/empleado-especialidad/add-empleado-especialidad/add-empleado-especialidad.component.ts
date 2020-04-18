import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ListEspecialidadService } from "../../../app/services/especialidad/list-especialida.service";

@Component({
  selector: 'app-add-empleadoespecialidad',
  templateUrl: './add-empleado-especialidad.component.html',
  styleUrls: ['./add-empleado-especialidad.component.css']
})
export class AddEmpleadoEspecialidadComponent implements OnInit {

  formSubmitted:boolean=false;
  nombre:string;
 title:string;
  constructor(private es:ListEspecialidadService) {
  this.title="";
  }

  ngOnInit() {
  }

  addEspecialidad(){
    this.formSubmitted=true;
    this.es.addEspecialidad(this.nombre).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
