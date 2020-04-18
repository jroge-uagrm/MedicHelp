import { Component, OnInit } from '@angular/core';
import { ListEmpleadoService } from "../../../services/persona/empleado/list-empleado.service";
import { Empleado } from "../../../modules/Empleado";

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleado:Empleado[]=[];
  copia:Empleado[]=[];
  estado:string;

  constructor(private le:ListEmpleadoService) { }

  ngOnInit() {
    this.getAll();
  }

  public captureScreenEmpleado() //FUNCION PARA DESCARGAR REPORTE 
  {  
    var data = document.getElementById('contentToConvertEmpleado');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('ListaDeEmpleados.pdf'); // Generated PDF   
    });  
  } 

  getAll(){ //Funcion para obtener todos los recursos 
    this.empleado=null;
   this.le.getAllEmpleados().subscribe((all)=>{
      this.empleado=all;
      console.log(this.empleado);
    });
   }

  Delete(id){
  this.le.deleteEmpleado(id).subscribe((data)=>{
    console.log('task-deleted: ', id);
  });
 }

}
