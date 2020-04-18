import { Component, OnInit } from '@angular/core';
import { ListEspecialidadService } from "../../services/especialidad/list-especialida.service";
import { Especialidad } from "../../modules/Especialidad";

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado-especialidad.component.html',
  styleUrls: ['./list-empleado-especialidad.component.css']
})
export class ListEmpleadoEspecialidadComponent implements OnInit {

  especialidad:Especialidad[]=[];

  constructor(private le:ListEspecialidadService) { }

  ngOnInit() {
    this.especialidad=null;
    this.getAll();
  }


  getAll(){ //Funcion para obtener todos los recursos 
  this.especialidad=null;
   this.le.getAllEspecialidads().subscribe((all)=>{
      this.especialidad=all;
      console.log(this.especialidad);
    });
   }

  Delete(id){
  this.le.deleteEspecialidad(id).subscribe((data)=>{
    console.log('task-deleted: ', id);
  });
 }
}
